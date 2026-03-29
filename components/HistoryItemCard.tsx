"use client";

import React, { useState } from "react";
import { HistoryItem } from "@/lib/types";
import { formatCurrency } from "@/utils/calculator";

interface Props {
  item: HistoryItem;
  onDelete: (id: string) => void;
  onReload: (input: HistoryItem["input"]) => void;
}

const BADGE_CLS = {
  受ける:   "accept",
  条件交渉: "negotiate",
  断る:     "decline",
} as const;

export function HistoryItemCard({ item, onDelete, onReload }: Props) {
  const [confirming, setConfirming] = useState(false);

  const d = new Date(item.savedAt);
  const dateStr = `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;

  const handleDelete = () => {
    if (confirming) {
      onDelete(item.id);
    } else {
      setConfirming(true);
      setTimeout(() => setConfirming(false), 3000);
    }
  };

  return (
    <div className="h-card">
      <div className="h-top">
        <span className={`badge ${BADGE_CLS[item.result.verdict]}`}>
          {item.result.verdict}
        </span>
        <span className="h-name">{item.input.name || "無題"}</span>
        <span className="h-date">{dateStr}</span>
      </div>

      <div className="h-stats">
        <span>報酬 {formatCurrency(item.input.reward)}</span>
        <span>実質 {formatCurrency(item.result.effectiveRate)}/h</span>
        <span>基準 {formatCurrency(item.result.requiredRate)}/h</span>
      </div>

      <div className="h-actions">
        <button className="h-btn reload" onClick={() => onReload(item.input)}>
          再計算
        </button>
        <button
          className={`h-btn del ${confirming ? "confirm" : ""}`}
          onClick={handleDelete}
        >
          {confirming ? "本当に削除" : "削除"}
        </button>
      </div>
    </div>
  );
}
