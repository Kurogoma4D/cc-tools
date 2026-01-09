# Claude Code Tools

このリポジトリは、Claude Codeを利用しているユーザーのホームディレクトリ内にある `.claude` ディレクトリの構造から、公開可能なツールと設定を抜き出したものです。

## 概要

Claude Codeの設定ファイルと便利なフックスクリプトを含んでいます。これらのツールは、Claude Codeでの開発作業をより効率的にするために作成されています。

## 使用方法

### プラグインマーケットプレイスから利用（推奨）

1. Claude Codeでマーケットプレイスを追加
   ```bash
   /plugin marketplace add kurogoma4d/cc-tools
   ```

2. プラグインをインストール
   ```bash
   /plugin install mermaid-escape-hook@cc-tools
   ```

### 手動インストール

1. このリポジトリを `.claude` ディレクトリにコピー
   1. settings.jsonはマージする形で、必要なツールの設定を抽出して自身のファイルに追記する
2. Claude Codeが設定を自動読み込み

## 含まれているツール

### Skills

#### material-thinking
Material Design 3 (M3) および M3 Expressiveの包括的なガイダンスを提供するスキルです。
- M3準拠のUIデザイン・実装支援
- デザイントークン（カラースキーム、タイポグラフィ、シェイプ）の生成
- 38種類のM3コンポーネントのガイダンス
- アクセシビリティとレスポンシブデザインの確保

#### pr-review-check
現在のブランチのPRから未解決のレビューコメントを取得するスキルです。
- `gh` コマンドが必要
- GraphQL APIを使用してレビュースレッドを取得
- 未解決のコメントのみをフィルタリング

### Hooks

#### Mermaidエスケープフック

Markdownファイル内のMermaid図表で特殊文字を自動エスケープするツールセットです。

#### escape_mermaid_hook.sh
- Claude CodeのPostToolUseフックとして動作
- Markdownファイルが編集された際に自動実行
- Mermaid図表内でgraph, flowchartがある場合にラベルに含まれる特殊文字を自動エスケープ
- 以下の特殊文字をHTMLエンティティに変換：
  - `(` → `&#40;`、`)` → `&#41;`
  - `<` → `&lt;`、`>` → `&gt;`
  - `"` → `&quot;`
  - `[` → `&#91;`、`]` → `&#93;`
  - `{` → `&#123;`、`}` → `&#125;`
- マルチスレッド処理による高速化
- 単一ファイルまたは複数ファイルの一括処理に対応
