// ===========================
// 計算・判定ロジック
// ===========================

import { JobInput, CalculationResult } from "@/lib/types";

/** 負担感ごとの補正額（円） */
const BURDEN_CORRECTION: Record<number, number> = {
  1: 0,
  2: 100,
  3: 200,
  4: 350,
  5: 500,
};

/** 将来性ごとの補正額（円） */
const FUTURE_CORRECTION: Record<number, number> = {
  1: 0,
  2: 50,
  3: 100,
  4: 200,
  5: 300,
};

/** 判定ごとのコメント */
const VERDICT_COMMENTS = {
  受ける: "基準を上回っています。条件面でも受けやすい案件です。",
  条件交渉: "あと少しで基準に届きます。報酬や交通費条件の交渉余地があります。",
  断る: "実質時給が基準を下回っています。時間と経費に対して採算が合いにくい案件です。",
};

/**
 * 入力値から実質時給・判定を計算する
 */
export function calculate(input: JobInput): CalculationResult {
  // 総拘束時間
  const totalHours =
    input.workHours +
    input.travelHours +
    input.prepHours +
    input.postHours +
    input.waitHours;

  // 総経費
  const totalCost = input.transportCost + input.otherCost;

  // 実質時給（0除算を防ぐ）
  const effectiveRate =
    totalHours > 0 ? (input.reward - totalCost) / totalHours : 0;

  // 必要時給 = 最低希望時給 + 負担補正 - 将来性補正
  const requiredRate =
    input.minHourlyRate +
    BURDEN_CORRECTION[input.burden] -
    FUTURE_CORRECTION[input.futureValue];

  // 実質時給 / 必要時給 の割合
  const ratio = requiredRate > 0 ? effectiveRate / requiredRate : 0;

  // 判定
  let verdict: CalculationResult["verdict"];
  if (ratio >= 1.0) {
    verdict = "受ける";
  } else if (ratio >= 0.9) {
    verdict = "条件交渉";
  } else {
    verdict = "断る";
  }

  return {
    totalHours,
    totalCost,
    effectiveRate,
    requiredRate,
    ratio,
    verdict,
    comment: VERDICT_COMMENTS[verdict],
  };
}

/** 時給を「¥1,200」の形式でフォーマット */
export function formatCurrency(value: number): string {
  return `¥${Math.round(value).toLocaleString("ja-JP")}`;
}

/** 時間を「1.5h」の形式でフォーマット */
export function formatHours(value: number): string {
  return `${value}h`;
}
