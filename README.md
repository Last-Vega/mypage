# Shingo Watanabe Portfolio

## 🚀 技術
- **Frontend**: React 19, TypeScript
- **Styling**: SCSS, Bulma CSS Framework
- **Build Tool**: Create React App
- **Icons**: Font Awesome 4.7
- **Animation**: CSS Animations


## 🛠️ セットアップ

### 前提条件

- Node.js 16.x以上
- npm 7.x以上

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd mypage-react

# 依存関係をインストール
npm install
```

### 開発サーバー起動

```bash
npm start
```

開発サーバーが `http://localhost:3000` で起動します。

## 🧪 テスト

### テストの実行

```bash
# 全テストを実行
npm test

# テストをwatch モードで実行
npm test -- --watch

# カバレッジ付きでテストを実行
npm test -- --coverage
```

### テストファイルの追加

- テストファイルは `*.test.tsx` または `*.spec.tsx` の拡張子で作成
- `src/` フォルダ内のどこにでも配置可能
- Jest + React Testing Library を使用

### 例: コンポーネントテスト

```typescript
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders hero component', () => {
  render(<Hero />);
  const nameElement = screen.getByText(/Shingo Watanabe/i);
  expect(nameElement).toBeInTheDocument();
});
```

## 🔧 ビルド

### 本番ビルド

```bash
npm run build
```

最適化されたビルドが `build/` フォルダに生成されます。

### ビルドの確認

```bash
# ローカルでビルドを確認（serve パッケージが必要）
npx serve -s build
```

## 🚀 デプロイ
### GitHub Pages でのロイ

1. **gh-pages パッケージをインストール**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **package.json に追加**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **デプロイ実行**
   ```bash
   npm run deploy
   ```

## 🚀 CI/CD 自動デプロイ（GitHub Pages）

**自動デプロイが設定済みです！** `main`ブランチにpushするだけで自動的にGitHub Pagesにデプロイされます。

### セットアップ手順（リポジトリオーナーのみ）

1. GitHubリポジトリの「Settings」→「Pages」に移動
2. Source を「GitHub Actions」に設定
3. `main`ブランチにpushすると自動デプロイが開始されます

### ワークフロー詳細

- **トリガー**: `main`ブランチへのpush/PR
- **プロセス**:
  1. Node.js 18 環境セットアップ
  2. 依存関係インストール (`npm ci`)
  3. テスト実行 (`npm test`)
  4. プロダクションビルド (`npm run build`)
  5. GitHub Pagesに自動デプロイ
- **デプロイURL**: https://last-vega.github.io/mypage

### ワークフロー設定ファイル

`.github/workflows/deploy.yml` に設定済み：

```yaml
name: Build and Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write
```

## 🎨 カスタマイズ

### 色の変更

`src/assets/styles/variables.scss` で主要な色を変更できます：

```scss
$primary: #26A69A;    // メインカラー
$secondary: #26A69A;  // セカンダリカラー
```

### コンテンツの更新

- **プロジェクト**: `src/data/projects.ts`
- **スキル**: `src/data/skills.ts`
- **個人情報**: 各コンポーネントファイル内

### 新しいセクションの追加

1. 新しいコンポーネントを作成
2. `src/App.tsx` にインポート・追加
3. `src/components/NavBar.tsx` にナビゲーション項目を追加

## 📱 レスポンシブ対応

- **デスクトップ**: 1024px以上
- **タブレット**: 768px - 1024px
- **モバイル**: 768px以下

各コンポーネントでメディアクエリを使用してレスポンシブ対応を実装。

## 🔍 SEO対応

### メタタグの設定

`public/index.html` でメタタグを設定：

```html
<meta name="keywords" content="データサイエンス,機械学習,React,TypeScript">
<meta property="og:description" content="データサイエンティスト・機械学習エンジニア">
```

## 🐛 トラブルシューティング

### よくある問題

1. **ポート3000が使用中**
   ```bash
   # 別のポートで起動
   PORT=3001 npm start
   ```

2. **SCSS エラー**
   ```bash
   # node-sassを再インストール
   npm uninstall node-sass
   npm install sass
   ```

3. **型エラー**
   ```bash
   # 型定義を確認
   npm run type-check
   ```
