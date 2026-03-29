# 仕事受けるべき？チェッカー

見かけの時給ではなく、移動・準備・後処理・雑費まで含めた「実質時給」で、仕事を **受ける・条件交渉・断る** の3段階で判定するスマホ向けWebアプリです。

## セットアップ手順

```bash
# 1. 依存パッケージをインストール
npm install

# 2. 開発サーバーを起動
npm run dev

# 3. ブラウザで開く → http://localhost:3000
```

### 本番ビルド

```bash
npm run build
npm start
```

## ファイル構成

```
job-checker/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # メインページ
│   └── globals.css         # スタイル
├── components/
│   ├── JobForm.tsx          # 入力フォーム
│   ├── ResultCard.tsx       # 判定結果
│   ├── HistoryList.tsx      # 履歴一覧
│   └── HistoryItemCard.tsx  # 履歴1件
├── lib/
│   ├── types.ts             # 型定義
│   └── storage.ts           # localStorage
├── utils/
│   └── calculator.ts        # 計算ロジック
└── hooks/
    └── useHistory.ts        # 履歴管理hook
```

## 判定ロジック

```
実質時給 = (報酬額 - 総経費) / 総拘束時間
必要時給 = 最低希望時給 + 負担補正 - 将来性補正

実質時給 >= 必要時給        → 受ける
必要時給の 90%〜100%未満   → 条件交渉
必要時給の 90% 未満        → 断る
```

## 将来の拡張案

- **PWA化** — ホーム画面追加・オフライン対応
- **Firebase/Supabase** — クラウド保存・複数端末対応
- **手取り時給** — 税・社会保険を加味した計算
- **疲労度詳細化** — 休日/平日・屋内外などの補正追加
- **カレンダー連携** — Google Calendarへの自動登録
- **月次レポート** — 稼働時間・収入の集計ダッシュボード
- **CSVエクスポート** — 確定申告・収支管理に活用
