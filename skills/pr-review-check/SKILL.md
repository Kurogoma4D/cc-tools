---
name: pr-review-check
description: Check Pull Request on current branch, and obtain unresolved review comments. `gh` command is required. Use this when user instructed with `PR review comment` `PR レビューコメント` etc.
---

# Get Unresolved Review Comments for Current Branch's PR

## Get PR Number
```bash
PR_NUMBER=$(gh pr view --json number --jq '.number')
```

## Fetch Unresolved Review Comments
```bash
gh api graphql -f query='
  query($owner: String!, $repo: String!, $number: Int!) {
    repository(owner: $owner, name: $repo) {
      pullRequest(number: $number) {
        reviewThreads(first: 100) {
          nodes {
            isResolved
            comments(first: 10) {
              nodes {
                body
                author { login }
                path
                line
              }
            }
          }
        }
      }
    }
  }
' -f owner='{owner}' -f repo='{repo}' -F number="$PR_NUMBER" \
  | jq '.data.repository.pullRequest.reviewThreads.nodes | map(select(.isResolved == false))'
```
