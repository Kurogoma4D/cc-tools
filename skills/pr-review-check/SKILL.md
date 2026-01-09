---
name: pr-review-check
description: Check Pull Request on current branch, and obtain unresolved review comments. `gh` command is required. Use this when user instructed with `PR review comment` `PR レビューコメント` etc.
allowed-tools: Read, Bash(cat:*), Bash(gh:*), Bash(jq:*)
---

# Get Unresolved Review Comments for Current Branch's PR

```bash
# Save query to a temp file
cat > /tmp/query.graphql << 'EOF'
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
EOF

# Execute
gh api graphql \
  -f query="$(cat /tmp/query.graphql)" \
  -f owner="$(gh repo view --json owner --jq '.owner.login')" \
  -f repo="$(gh repo view --json name --jq '.name')" \
  -F number="$(gh pr view --json number --jq '.number')" \
  | jq '.data.repository.pullRequest.reviewThreads.nodes | map(select(.isResolved == false))'
```