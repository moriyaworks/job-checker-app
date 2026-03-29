"use client";

import React from "react";
import { HistoryItem, JobInput } from "@/lib/types";
import { HistoryItemCard } from "./HistoryItemCard";

interface Props {
  history: HistoryItem[];
  onDelete: (id: string) => void;
  onReload: (input: JobInput) => void;
}

export function HistoryList({ history, onDelete, onReload }: Props) {
  if (history.length === 0) {
    return (
      <div className="history-empty">
        <p>保存した案件はまだありません</p>
        <small>計算後に「履歴に保存する」で追加できます</small>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {history.map((item) => (
        <HistoryItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onReload={onReload}
        />
      ))}
    </div>
  );
}
