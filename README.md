# Photo Unlock Puzzle

写真アンロック型パズルWebアプリ（Next.js + TypeScript）

## 概要

撮影テクニックに関するクイズに答えることで、段階的に写真が解放されていくパズルゲームです。

## 機能

- **18歳以上確認モーダル**: 初回訪問時に同意を求める
- **5つのステージ**: 各ステージに5問のクイズ
- **段階的解放**: 正解するたびに写真が20%ずつ解放
- **永続化**: localStorageで進捗を保存
- **不正解でも再挑戦可能**: 詰まらない設計

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 写真素材の配置

`/public/photos/` ディレクトリに以下のファイルを配置してください:

- `photo1.png` (またはjpg)
- `photo2.png` (またはjpg)
- `photo3.png` (またはjpg)
- `photo4.png` (またはjpg)
- `photo5.mp4` (動画ファイル)

現在はサンプル画像が配置されています。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## ビルド

```bash
npm run build
npm start
```

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **localStorage** (進捗管理)

## プロジェクト構成

```
photo-unlock-puzzle/
├── app/
│   ├── page.tsx              # ホームページ
│   ├── layout.tsx            # レイアウト
│   ├── globals.css           # グローバルCSS
│   └── stage/
│       └── [id]/
│           └── page.tsx      # ステージページ
├── components/
│   ├── AgeGateModal.tsx      # 年齢確認モーダル
│   ├── StageCard.tsx         # ステージカード
│   ├── TileRevealImage.tsx   # タイル解放画像
│   └── QuizPanel.tsx         # クイズパネル
├── lib/
│   ├── quizData.ts           # クイズデータ
│   └── storage.ts            # localStorage管理
└── public/
    └── photos/               # 写真素材置き場
```

## カスタマイズ

### クイズ内容の変更

`lib/quizData.ts` を編集してクイズ問題を変更できます。

### デザインのカスタマイズ

Tailwind CSSを使用しているため、各コンポーネントのクラス名を変更することでデザインをカスタマイズできます。

## ライセンス

このプロジェクトはサンプルとして提供されています。
