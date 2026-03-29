@tailwind base;
@tailwind components;
@tailwind utilities;

/* ======================================
   デザイントークン
   背景：温かみのあるオフホワイト
   アクセント：くすみローズ
   判定色：彩度を落として上品に
   ====================================== */
:root {
  --bg:          #fdf8f6;
  --surface:     #ffffff;
  --border:      #ede7e3;
  --border-focus: #c4736a;

  --text:        #2d2420;
  --muted:       #7a6560;
  --light:       #b0a09b;

  --rose:        #c4736a;   /* メインアクセント */
  --rose-light:  #f9efed;
  --rose-mid:    #e8b0aa;

  /* 判定色：目に優しく、でも明確に読める */
  --accept:      #3d7a5a;
  --accept-bg:   #f0f8f3;
  --accept-mid:  #a8d4ba;

  --negotiate:   #8a6020;
  --negotiate-bg:#fdf6ec;
  --negotiate-mid:#ddb86a;

  --decline:     #a83030;
  --decline-bg:  #fdf0f0;
  --decline-mid: #e0a0a0;

  --r:    14px;
  --r-sm:  8px;
  --r-xs:  5px;
}

/* ======================================
   リセット・ベース
   ====================================== */
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic UI', Meiryo, sans-serif;
  font-size: 15px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

/* ======================================
   レイアウト
   ====================================== */
.wrap {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

/* ======================================
   ヘッダー
   ====================================== */
.header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 16px 18px 14px;
}

.header-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
  gap: 7px;
}

.header-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: var(--rose-light);
  border-radius: 50%;
  font-size: 14px;
  flex-shrink: 0;
}

.header-sub {
  margin: 3px 0 0;
  font-size: 12px;
  color: var(--muted);
  padding-left: 35px; /* アイコン分揃える */
}

/* ======================================
   タブ
   ====================================== */
.tabs {
  display: flex;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.tab {
  flex: 1;
  padding: 11px 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--light);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  letter-spacing: 0.2px;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.15s, border-color 0.15s;
}

.tab.active {
  color: var(--rose);
  border-bottom-color: var(--rose);
  font-weight: 600;
}

.tab-count {
  background: var(--rose);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  min-width: 17px;
  height: 17px;
  border-radius: 9px;
  padding: 0 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* ======================================
   メインコンテンツ
   ====================================== */
.main {
  flex: 1;
  padding: 14px 14px 56px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ======================================
   カード（フォームセクション）
   ====================================== */
.card {
  background: var(--surface);
  border-radius: var(--r);
  padding: 18px 16px 16px;
  /* shadowで浮かせるのではなく、薄い枠で清潔感を出す */
  border: 1px solid var(--border);
}

.card-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  margin: 0 0 14px;
  letter-spacing: 0.6px;
  text-transform: none;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* カードタイトル左の細ライン */
.card-title::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 13px;
  background: var(--rose-mid);
  border-radius: 2px;
  flex-shrink: 0;
}

/* ======================================
   フィールド
   ====================================== */
.field {
  margin-bottom: 13px;
}
.field:last-child { margin-bottom: 0; }

.field-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.optional {
  font-size: 10px;
  font-weight: 400;
  color: var(--light);
  background: #f2eeeb;
  border-radius: var(--r-xs);
  padding: 1px 5px;
  letter-spacing: 0.2px;
}

/* 入力行（input + 単位） */
.input-row {
  display: flex;
  align-items: center;
  gap: 7px;
}

/* 共通 input スタイル */
.input {
  flex: 1;
  height: 44px;
  padding: 0 13px;
  font-size: 16px;        /* iOS zoom 防止 */
  font-family: inherit;
  color: var(--text);
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: var(--r-sm);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  transition: border-color 0.18s, background 0.18s;
}

.input::placeholder { color: var(--light); }

.input:focus {
  border-color: var(--border-focus);
  background: #fff;
}

.input.error {
  border-color: var(--decline);
  background: #fffafa;
}

.unit {
  font-size: 13px;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30px;
}

.field-error {
  font-size: 12px;
  color: var(--decline);
  margin: 5px 0 0;
  padding-left: 2px;
}

/* ======================================
   スケール（1〜5）
   ====================================== */
.scale-row {
  display: flex;
  gap: 7px;
  margin-bottom: 5px;
}

.scale-btn {
  flex: 1;
  height: 44px;
  font-size: 15px;
  font-weight: 600;
  color: var(--muted);
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: var(--r-sm);
  cursor: pointer;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.12s, color 0.12s, border-color 0.12s;
}

.scale-btn.on {
  background: var(--rose);
  border-color: var(--rose);
  color: #fff;
}

.scale-hint {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--light);
  padding: 0 2px;
}

/* ======================================
   アクションボタン
   ====================================== */
.actions {
  display: flex;
  gap: 9px;
}

.btn-calc {
  flex: 1;
  height: 50px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background: var(--rose);
  border: none;
  border-radius: var(--r);
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.3px;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.15s;
}
.btn-calc:active { opacity: 0.82; }

.btn-reset {
  height: 50px;
  padding: 0 17px;
  font-size: 14px;
  font-weight: 500;
  color: var(--muted);
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: var(--r);
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.15s;
}
.btn-reset:active { background: #f5f0ed; }

/* ======================================
   結果カード — 判定が一目でわかること最優先
   ====================================== */
.result-card {
  border-radius: var(--r);
  padding: 20px 18px 18px;
  border: 1.5px solid;
}

/* 判定ごとの色 */
.result-card.accept {
  background: var(--accept-bg);
  border-color: var(--accept-mid);
}
.result-card.negotiate {
  background: var(--negotiate-bg);
  border-color: var(--negotiate-mid);
}
.result-card.decline {
  background: var(--decline-bg);
  border-color: var(--decline-mid);
}

/* --- 判定ヘッダー --- */
.verdict-row {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 10px;
}

/* 丸いアイコン背景 */
.verdict-icon-wrap {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.accept    .verdict-icon-wrap { background: #c8e8d8; }
.negotiate .verdict-icon-wrap { background: #f0d8a8; }
.decline   .verdict-icon-wrap { background: #f0c0c0; }

.verdict-text-wrap { display: flex; flex-direction: column; }

.verdict-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  margin: 0;
  letter-spacing: 0.3px;
}

/* 判定名：最も大きく、最も目立つ */
.verdict-name {
  font-size: 26px;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}
.accept    .verdict-name { color: var(--accept); }
.negotiate .verdict-name { color: var(--negotiate); }
.decline   .verdict-name { color: var(--decline); }

/* コメント */
.verdict-comment {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0,0,0,0.07);
}

/* --- 実質時給 vs 必要時給 --- */
.rate-block {
  background: rgba(255,255,255,0.65);
  border-radius: var(--r-sm);
  padding: 14px 16px;
  margin-bottom: 10px;
}

.rate-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 6px;
}

.rate-label {
  font-size: 11px;
  color: var(--muted);
  white-space: nowrap;
  min-width: 52px;
}

/* 実質時給 */
.rate-effective {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1;
}
.accept    .rate-effective { color: var(--accept); }
.negotiate .rate-effective { color: var(--negotiate); }
.decline   .rate-effective { color: var(--decline); }

.rate-unit {
  font-size: 13px;
  color: var(--muted);
}

/* 必要時給 */
.rate-required-val {
  font-size: 20px;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: -0.5px;
}

/* 差額ライン */
.diff-line {
  padding-top: 8px;
  border-top: 1px solid rgba(0,0,0,0.07);
  font-size: 13px;
  font-weight: 700;
  text-align: right;
}
.diff-line.plus  { color: var(--accept); }
.diff-line.minus { color: var(--decline); }

/* --- サブ数値 --- */
.sub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 14px;
}

.sub-item {
  background: rgba(255,255,255,0.65);
  border-radius: var(--r-sm);
  padding: 10px 13px;
}

.sub-label {
  font-size: 11px;
  color: var(--muted);
  margin: 0 0 2px;
}

.sub-value {
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

/* 保存ボタン */
.btn-save {
  width: 100%;
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  color: var(--rose);
  background: #fff;
  border: 1.5px solid var(--rose);
  border-radius: var(--r-sm);
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.2px;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.15s;
}
.btn-save:active { background: var(--rose-light); }
.btn-save.done {
  color: var(--light);
  border-color: var(--border);
  background: #f8f4f2;
  cursor: default;
}

/* ======================================
   履歴
   ====================================== */
.history-empty {
  text-align: center;
  padding: 52px 20px;
  color: var(--muted);
  font-size: 14px;
}
.history-empty small {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: var(--light);
}

.h-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 13px 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.h-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.h-name {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--text);
}

.h-date {
  font-size: 11px;
  color: var(--light);
  white-space: nowrap;
  flex-shrink: 0;
}

/* 判定バッジ */
.badge {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: var(--r-xs);
  flex-shrink: 0;
  letter-spacing: 0.2px;
}
.badge.accept    { color: var(--accept);    background: var(--accept-bg); }
.badge.negotiate { color: var(--negotiate); background: var(--negotiate-bg); }
.badge.decline   { color: var(--decline);   background: var(--decline-bg); }

.h-stats {
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: var(--muted);
  flex-wrap: wrap;
}

.h-actions {
  display: flex;
  gap: 8px;
}

.h-btn {
  flex: 1;
  height: 36px;
  font-size: 13px;
  font-weight: 500;
  border-radius: var(--r-sm);
  border: 1.5px solid;
  cursor: pointer;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.12s;
}
.h-btn.reload { color: var(--rose); border-color: var(--rose); background: #fff; }
.h-btn.reload:active { background: var(--rose-light); }
.h-btn.del    { color: var(--muted); border-color: var(--border); background: #fff; }
.h-btn.del.confirm { color: var(--decline); border-color: var(--decline); background: var(--decline-bg); }

/* ======================================
   フッター
   ====================================== */
.footer {
  text-align: center;
  padding: 16px;
  font-size: 11px;
  color: var(--light);
  letter-spacing: 0.2px;
}

/* ======================================
   ユーティリティ
   ====================================== */
input[type="number"] { -moz-appearance: textfield; }
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button { display: none; }

@keyframes slide-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.slide-up { animation: slide-up 0.22s ease; }
