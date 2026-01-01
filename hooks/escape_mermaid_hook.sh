#!/bin/bash

# Extract file paths from postToolUse hook event
# Input format: {
#   "hook_event_name": "PostToolUse",
#   "tool_name": "Write",
#   "tool_input": {"file_path": "/path/to/file.txt", "content": "..."},
#   "tool_response": {"filePath": "/path/to/file.txt", "success": true}
# }

# Read stdin
input=$(cat)

# Extract tool name
tool_name=$(echo "$input" | jq -r '.tool_name // empty')

# Extract file path from tool_input
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

# Check if it's a markdown file and the operation was successful
if [[ "$file_path" == *.md ]] && [[ -n "$file_path" ]]; then
  # Run the escape script only on this specific file
  # Use CLAUDE_PLUGIN_ROOT if available (when installed as plugin), otherwise fall back to $HOME/.claude/hooks
  SCRIPT_DIR="${CLAUDE_PLUGIN_ROOT:-$HOME/.claude/hooks}"
  node "$SCRIPT_DIR/escape_mermaid_special_chars_optimized.mjs" "$file_path"
fi
