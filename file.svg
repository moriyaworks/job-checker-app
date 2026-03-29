"use client";

// ===========================
// 履歴管理カスタムhook
// ===========================

import { useState, useEffect, useCallback } from "react";
import { HistoryItem, JobInput, CalculationResult } from "@/lib/types";
import {
  loadHistory,
  addToHistory,
  removeFromHistory,
  generateId,
} from "@/lib/storage";

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // 初回マウント時にlocalStorageから読み込む
  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  /** 案件を履歴に保存する */
  const saveJob = useCallback(
    (input: JobInput, result: CalculationResult) => {
      const newItem: HistoryItem = {
        id: generateId(),
        savedAt: new Date().toISOString(),
        input,
        result,
      };
      addToHistory(newItem);
      setHistory(loadHistory()); // 最新状態を読み直す
    },
    []
  );

  /** IDで履歴を削除する */
  const deleteJob = useCallback((id: string) => {
    removeFromHistory(id);
    setHistory((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return { history, saveJob, deleteJob };
}
