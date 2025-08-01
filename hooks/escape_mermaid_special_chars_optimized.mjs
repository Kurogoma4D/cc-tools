#!/usr/bin/env node

import { readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';
import { Worker, isMainThread, parentPort } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// Pre-compiled regular expressions for better performance
const MERMAID_START = /^```mermaid/;
const MERMAID_END = /^```$/;
const GRAPH_START = /^\s*(graph|flowchart)/;
const BR_TAG = /<br\/>/g;

// Function to find all node definitions with brackets in a line
function findNodeBrackets(line, openChar, closeChar) {
  const results = [];
  const nodePattern = /([A-Za-z0-9_]+)(?=\[|\{)/g;
  let match;

  while ((match = nodePattern.exec(line)) !== null) {
    const nodeName = match[1];
    const nodeStart = match.index;
    const bracketStart = nodeStart + nodeName.length;

    if (line[bracketStart] === openChar) {
      let depth = 1;
      let end = bracketStart + 1;

      while (end < line.length && depth > 0) {
        if (line[end] === openChar) depth++;
        else if (line[end] === closeChar) depth--;
        end++;
      }

      if (depth === 0) {
        const label = line.substring(bracketStart + 1, end - 1);

        results.push({
          node: nodeName,
          label: label,
          fullMatch: line.substring(nodeStart, end),
          startIndex: nodeStart
        });
      }
    }
  }

  return results;
}

// Escape special characters in mermaid labels
function escapeMermaidLabel(label) {
  // Use single pass replacement with replace callback
  return label
    .replace(BR_TAG, '\0') // Use null byte as placeholder (faster than string)
    .replace(/[()<>"\[\]{}]/g, char => {
      switch (char) {
        case '(': return '&#40;';
        case ')': return '&#41;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case '[': return '&#91;';
        case ']': return '&#93;';
        case '{': return '&#123;';
        case '}': return '&#125;';
      }
    })
    .replace(/\0/g, '<br/>'); // Restore br tags
}

// Process mermaid content efficiently
function processMermaidContent(content) {

  const lines = content.split('\n');
  const result = [];
  let inMermaid = false;
  let inGraph = false;
  let modified = false;
  let mermaidBlockCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inMermaid && MERMAID_START.test(line)) {
      inMermaid = true;
      mermaidBlockCount++;

      result.push(line);
    } else if (inMermaid && MERMAID_END.test(line)) {

      inMermaid = false;
      inGraph = false;
      result.push(line);
    } else if (inMermaid) {
      if (!inGraph && GRAPH_START.test(line)) {
        inGraph = true;

        result.push(line);
      } else if (inGraph) {
        let processedLine = line;

        // Find all node definitions with balanced brackets
        const squareBrackets = findNodeBrackets(line, '[', ']');
        const curlyBrackets = findNodeBrackets(line, '{', '}');

        if (squareBrackets.length > 0 || curlyBrackets.length > 0) {

        }

        // Process from end to start to preserve indices
        const allBrackets = [...squareBrackets, ...curlyBrackets]
          .sort((a, b) => b.startIndex - a.startIndex);

        for (const bracket of allBrackets) {
          const escaped = escapeMermaidLabel(bracket.label);
          if (escaped !== bracket.label) {

            modified = true;
            const openChar = line[bracket.startIndex + bracket.node.length];
            const closeChar = openChar === '[' ? ']' : '}';
            const replacement = `${bracket.node}${openChar}${escaped}${closeChar}`;

            processedLine =
              processedLine.substring(0, bracket.startIndex) +
              replacement +
              processedLine.substring(bracket.startIndex + bracket.fullMatch.length);
          }
        }

        result.push(processedLine);
      } else {
        result.push(line);
      }
    } else {
      result.push(line);
    }
  }


  return { content: result.join('\n'), modified };
}

// Worker thread code
if (!isMainThread) {
  parentPort.on('message', async ({ filePath }) => {
    try {

      const content = await readFile(filePath, 'utf8');

      // Quick check if file contains mermaid blocks
      if (!content.includes('```mermaid')) {

        parentPort.postMessage({ filePath, processed: false });
        return;
      }

      const { content: processedContent, modified } = processMermaidContent(content);

      if (modified) {

        await writeFile(filePath, processedContent);
        parentPort.postMessage({ filePath, processed: true });
      } else {

        parentPort.postMessage({ filePath, processed: false });
      }
    } catch (error) {

      parentPort.postMessage({ filePath, error: error.message });
    }
  });
}

// Find markdown files recursively (async)
async function* findMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      yield* findMarkdownFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      yield fullPath;
    }
  }
}

// Process files in parallel using worker threads
async function processFilesInParallel(files, numWorkers) {
  const workers = [];
  const fileQueue = [...files];
  const results = [];

  // Create worker pool
  for (let i = 0; i < numWorkers; i++) {
    workers.push(new Worker(__filename));
  }

  // Process files
  const processFile = async (worker, file) => {
    return new Promise((resolve) => {
      worker.once('message', (result) => {
        results.push(result);
        resolve();
      });
      worker.postMessage({ filePath: file });
    });
  };

  // Distribute work among workers
  const workerPromises = workers.map(async (worker) => {
    while (fileQueue.length > 0) {
      const file = fileQueue.shift();
      if (file) {
        await processFile(worker, file);
      }
    }
  });

  await Promise.all(workerPromises);

  // Terminate workers
  await Promise.all(workers.map(w => w.terminate()));

  return results;
}

// Main function
async function main() {
  const startTime = Date.now();

  const files = [];

  // Check if specific files were provided as arguments
  const args = process.argv.slice(2);


  if (args.length > 0) {
    // Process only the specified files

    for (const file of args) {
      if (file.endsWith('.md')) {
        files.push(file);
      }
    }
  } else {
    // Collect all markdown files

    for await (const file of findMarkdownFiles('.')) {
      files.push(file);
    }
  }

  if (files.length === 0) {

    return;
  }



  let results;

  // For single file, process directly without workers
  if (files.length === 1) {


    const content = await readFile(files[0], 'utf8');

    // Quick check for mermaid blocks
    if (!content.includes('```mermaid')) {

      results = [{ filePath: files[0], processed: false }];
    } else {

      const { content: fileContent, modified } = processMermaidContent(content);

      if (modified) {

        await writeFile(files[0], fileContent);
        results = [{ filePath: files[0], processed: true }];
      } else {
        console.log('[DEBUG] No modifications needed');
        results = [{ filePath: files[0], processed: false }];
      }
    }
  } else {
    // Determine optimal number of workers
    const numCPUs = cpus().length;
    const numWorkers = Math.min(numCPUs, files.length, 8); // Cap at 8 workers

    console.log(`Processing ${files.length} markdown files using ${numWorkers} workers...`);

    // Process files in parallel
    results = await processFilesInParallel(files, numWorkers);

  }

  // Report results
  const processed = results.filter(r => r.processed && !r.error);
  const errors = results.filter(r => r.error);

  if (processed.length > 0) {
    console.log(`\nProcessed files:`);
    processed.forEach(r => console.log(`  - ${r.filePath}`));
  }

  if (errors.length > 0) {
    console.log(`\nErrors:`);
    errors.forEach(r => console.log(`  - ${r.filePath}: ${r.error}`));
  }

  const elapsed = Date.now() - startTime;
  console.log(`\nTotal files processed: ${processed.length}`);
  console.log(`Time elapsed: ${elapsed}ms`);
}

// Only run main if this is the main thread
if (isMainThread) {
  main().catch(console.error);
}