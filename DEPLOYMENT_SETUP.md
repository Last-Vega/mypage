# 🚀 GitHub Pages 自動デプロイ セットアップガイド

## 📋 概要

このプロジェクトは GitHub Actions を使用して、`main` ブランチへの push 時に自動的に GitHub Pages にデプロイされるよう設定されています。

## ⚙️ 初回セットアップ手順

### 1. GitHub Pages の有効化

#### オプション A: GitHub Actions を使用（推奨）
1. GitHubリポジトリページにアクセス
2. **Settings** タブをクリック
3. 左サイドバーの **Pages** をクリック
4. **Source** セクションで **GitHub Actions** を選択
5. **Save** をクリック

#### オプション B: docs ディレクトリを使用
1. GitHubリポジトリページにアクセス
2. **Settings** タブをクリック
3. 左サイドバーの **Pages** をクリック
4. **Source** セクションで **Deploy from a branch** を選択
5. **Branch** で `main` を選択し、フォルダで `/docs` を選択
6. **Save** をクリック

> **注意**: オプション B を選択した場合、`docs` ディレクトリがリポジトリにコミットされている必要があります。

### 2. ブランチの確認

- メインブランチが `main` であることを確認
- 他のブランチ名を使用している場合は、`.github/workflows/deploy.yml` の `branches: [ main ]` を適切なブランチ名に変更

### 3. 権限の確認

GitHub Actions が以下の権限を持っていることを確認：

- **Contents**: Read
- **Pages**: Write
- **ID token**: Write

（通常、ワークフローファイルで自動設定されます）

## 🔄 デプロイプロセス

### 自動デプロイの流れ

1. **トリガー**: `main` ブランチへの `git push`
2. **ビルド**:
   - Node.js 18 環境のセットアップ
   - 依存関係のインストール (`npm ci`)
   - テストの実行 (`npm test`)
   - プロダクションビルド (`npm run build`)
   - `docs` ディレクトリの作成
3. **デプロイ**: GitHub Pages への自動デプロイ

### ビルドプロセスの詳細

```bash
npm run build
# ↓ 以下が順次実行される
# 1. react-scripts build    → build/ ディレクトリ作成
# 2. rimraf docs           → 既存の docs/ ディレクトリ削除
# 3. cp -r build docs      → build/ の内容を docs/ にコピー
```

これにより、GitHub Pages は `docs` ディレクトリまたは GitHub Actions の両方からデプロイ可能になります。

### デプロイ状況の確認

1. リポジトリの **Actions** タブで進行状況を確認
2. 成功すると、サイトが以下のURLで利用可能：
   ```
   https://last-vega.github.io/mypage
   ```

## 🛠️ ワークフローファイルの詳細

`.github/workflows/deploy.yml` の主要設定：

```yaml
# トリガー条件
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# 必要な権限
permissions:
  contents: read
  pages: write
  id-token: write

# ジョブ設定
jobs:
  build:    # ビルドジョブ
  deploy:   # デプロイジョブ
```

## 🚨 トラブルシューティング

### よくある問題と解決方法

#### 1. デプロイが失敗する

**原因**: GitHub Pages の設定が正しくない
**解決**: Settings > Pages で Source を "GitHub Actions" に設定

#### 2. ビルドエラー

**原因**: テストの失敗またはビルドエラー
**解決**: ローカルで `npm test` と `npm run build` を実行して問題を修正

#### 3. 権限エラー

**原因**: GITHUB_TOKEN の権限不足
**解決**: リポジトリの Settings > Actions > General で権限を確認

#### 4. カスタムドメインを使用したい場合

1. `public/CNAME` ファイルを作成してドメイン名を記載
2. DNS設定でGitHub Pagesを指すよう設定
3. Settings > Pages でカスタムドメインを設定

## 📝 手動デプロイ（必要な場合のみ）

自動デプロイに問題がある場合の手動デプロイ手順：

```bash
# ビルド
npm run build

# gh-pages ブランチにデプロイ（別途 gh-pages パッケージが必要）
npm install --save-dev gh-pages
npm run deploy
```

## 🔗 参考リンク

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/)

---

## 📞 サポート

問題が発生した場合は、GitHub Issues でお知らせください。
