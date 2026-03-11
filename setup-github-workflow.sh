#!/bin/bash
# GitHub Workflow Agents/Skills セットアップスクリプト
#
# 使い方:
#   bash <(curl -fsSL https://raw.githubusercontent.com/Kurogoma4D/cc-tools/main/setup-github-workflow.sh)
#   # または
#   ./setup-github-workflow.sh [インストール先ディレクトリ]

set -eo pipefail

BASE_URL="https://raw.githubusercontent.com/Kurogoma4D/cc-tools/main"
TEMPLATES=(
  "agents/code-reviewer.md"
  "agents/issue-implementer.md"
  "skills/auto-issue-worker/SKILL.md"
)

# --- ユーザー入力 ---

read -rp "リポジトリ (owner/name, e.g. Kurogoma4D/rule-game): " REPO_OWNER_NAME
read -rp "プロジェクト名 (e.g. rule-game): " PROJECT_NAME
read -rp "技術スタック (e.g. Kotlin, Android): " TECH_STACK
read -rp "デザイン原則 (空Enterでスキップ): " DESIGN_PRINCIPLES
DESIGN_PRINCIPLES="${DESIGN_PRINCIPLES:-the project established design conventions}"

echo ""
echo "品質チェックコマンド (空行で終了)"
QUALITY_COMMANDS=""
while IFS= read -rp "> " line; do
  [ -z "$line" ] && break
  QUALITY_COMMANDS="${QUALITY_COMMANDS}${line}
"
done
if [ -z "$QUALITY_COMMANDS" ]; then
  QUALITY_COMMANDS="- Lint: Run the project linting tools
- Format: Apply code formatting
- Test: Execute the full test suite
"
fi

TARGET_DIR="${1:-.claude}"

echo ""
echo "設定内容:"
echo "  リポジトリ: ${REPO_OWNER_NAME}"
echo "  プロジェクト: ${PROJECT_NAME}"
echo "  技術スタック: ${TECH_STACK}"
echo "  デザイン原則: ${DESIGN_PRINCIPLES}"
echo "  インストール先: ${TARGET_DIR}"
echo ""

read -rp "インストールしますか? (y/N): " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "中断しました。"
  exit 0
fi

# --- インストール ---

for tmpl in "${TEMPLATES[@]}"; do
  dest="${TARGET_DIR}/${tmpl}"
  mkdir -p "$(dirname "$dest")"

  tmp=$(mktemp)
  # リモートからダウンロード、失敗時はスクリプトと同階層のローカルファイルを使用
  SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
  if curl -fsSL "${BASE_URL}/${tmpl}" -o "$tmp" 2>/dev/null; then
    :
  elif [ -f "${SCRIPT_DIR}/${tmpl}" ]; then
    cp "${SCRIPT_DIR}/${tmpl}" "$tmp"
  else
    echo "  FAILED: ${tmpl} が見つかりません"
    rm -f "$tmp"
    continue
  fi

  if [ -f "$tmp" ]; then
    sed \
      -e "s|{{REPO_OWNER_NAME}}|${REPO_OWNER_NAME}|g" \
      -e "s|{{PROJECT_NAME}}|${PROJECT_NAME}|g" \
      -e "s|{{TECH_STACK}}|${TECH_STACK}|g" \
      -e "s|{{DESIGN_PRINCIPLES}}|${DESIGN_PRINCIPLES}|g" \
      "$tmp" > "${tmp}.2"

    QUALITY_COMMANDS="$QUALITY_COMMANDS" awk '{
      if (index($0, "{{QUALITY_COMMANDS}}")) printf "%s", ENVIRON["QUALITY_COMMANDS"]; else print
    }' "${tmp}.2" > "$dest"

    rm -f "$tmp" "${tmp}.2"
    echo "  installed: ${dest}"
  fi
done

echo ""
echo "セットアップ完了。"
