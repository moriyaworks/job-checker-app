"use client";

import React from "react";
import { CalculationResult } from "@/lib/types";
import { formatCurrency, formatHours } from "@/utils/calculator";

interface Props {
  result: CalculationResult;
  onSave: () => void;
  saved: boolean;
}

const CONFIG = {
  受ける:   { icon: "✓", cls: "accept",    label: "受ける" },
  条件交渉: { icon: "△", cls: "negotiate", label: "条件交渉" },
  断る:     { icon: "✕", cls: "decline",   label: "断る" },
} as const;

export function ResultCard({ result, onSave, saved }: Props) {
  const c = CONFIG[result.verdict];
  const diff = result.effectiveRate - result.requiredRate;
  const diffStr = diff >= 0
    ? `+${formatCurrency(diff)}/h 余裕あり`
    : `${formatCurrency(diff)}/h 不足`;

  return (
    <div className={`result-card ${c.cls} slide-up`}>

      {/* 判定ヘッダー：一目でわかること最優先 */}
      <div className="verdict-row">
        <div className="verdict-icon-wrap">
          <span>{c.icon}</span>
        </div>
        <div className="verdict-text-wrap">
          <p className="verdict-label">判定結果</p>
          <p className="verdict-name">{c.label}</p>
        </div>
      </div>

      <p className="verdict-comment">{result.comment}</p>

      {/* 実質時給 vs 必要時給 */}
      <div className="rate-block">
        <div className="rate-row">
          <span className="rate-label">実質時給</span>
          <span className="rate-effective">{formatCurrency(result.effectiveRate)}</span>
          <span className="rate-unit">/h</span>
        </div>
        <div className="rate-row">
          <span className="rate-label">必要時給</span>
          <span className="rate-required-val">{formatCurrency(result.requiredRate)}</span>
          <span className="rate-unit">/h</span>
        </div>
        <div className={`diff-line ${diff >= 0 ? "plus" : "minus"}`}>
          {diffStr}
        </div>
      </div>

      {/* サブ数値 */}
      <div className="sub-grid">
        <div className="sub-item">
          <p className="sub-label">総拘束時間</p>
          <p className="sub-value">{formatHours(result.totalHours)}</p>
        </div>
        <div className="sub-item">
          <p className="sub-label">総経費</p>
          <p className="sub-value">{formatCurrency(result.totalCost)}</p>
        </div>
      </div>

      <button
        onClick={onSave}
        disabled={saved}
        className={`btn-save ${saved ? "done" : ""}`}
      >
        {saved ? "✓ 保存済み" : "履歴に保存する"}
      </button>
    </div>
  );
}
