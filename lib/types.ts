// ===========================
// 型定義ファイル
// ===========================

/** フォームの入力値 */
export interface JobInput {
  name: string;           // 仕事名
  reward: number;         // 報酬額（円）
  workHours: number;      // 実働時間（時間）
  travelHours: number;    // 移動時間・往復（時間）
  prepHours: number;      // 準備時間（時間）
  postHours: number;      // 後処理時間（時間）
  waitHours: number;      // 待機時間（時間、任意）
  transportCost: number;  // 交通費（円）
  otherCost: number;      // その他雑費（円）
  minHourlyRate: number;  // 最低希望時給（円）
  burden: 1 | 2 | 3 | 4 | 5;    // 負担感（1〜5）
  futureValue: 1 | 2 | 3 | 4 | 5; // 将来性（1〜5）
}

/** 計算結果 */
export interface CalculationResult {
  totalHours: number;      // 総拘束時間
  totalCost: number;       // 総経費
  effectiveRate: number;   // 実質時給
  requiredRate: number;    // 必要時給
  ratio: number;           // 実質時給 / 必要時給（割合）
  verdict: "受ける" | "条件交渉" | "断る";
  comment: string;         // 判定コメント
}

/** 履歴1件のデータ */
export interface HistoryItem {
  id: string;                  // ユニークID
  savedAt: string;             // 保存日時（ISO文字列）
  input: JobInput;             // 入力値（再計算のために保存）
  result: CalculationResult;   // 計算結果
}

/** バリデーションエラー */
export type FormErrors = Partial<Record<keyof JobInput, string>>;
