// ===========================
// localStorage 読み書きライブラリ
// ===========================

import { HistoryItem } from "@/lib/types";

const STORAGE_KEY = "job-checker-history";

/** 履歴を全件取得する */
export function loadHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryItem[];
  } catch {
    return [];
  }
}

/** 履歴を全件保存する */
export function saveHistory(items: HistoryItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

/** 1件追加して保存する */
export function addToHistory(item: HistoryItem): void {
  const current = loadHistory();
  // 新しい順に並べるため先頭に追加
  saveHistory([item, ...current]);
}

/** IDで1件削除して保存する */
export function removeFromHistory(id: string): void {
  const current = loadHistory();
  saveHistory(current.filter((item) => item.id !== id));
}

/** ユニークIDを生成する */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
