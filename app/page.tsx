"use client";

import React, { useState, useCallback } from "react";
import { JobInput, CalculationResult, FormErrors } from "@/lib/types";
import { calculate } from "@/utils/calculator";
import { useHistory } from "@/hooks/useHistory";
import { JobForm } from "@/components/JobForm";
import { ResultCard } from "@/components/ResultCard";
import { HistoryList } from "@/components/HistoryList";

const DEFAULT: JobInput = {
  name: "", reward: 0, workHours: 0, travelHours: 0,
  prepHours: 0, postHours: 0, waitHours: 0,
  transportCost: 0, otherCost: 0, minHourlyRate: 0,
  burden: 3, futureValue: 3,
};

function validate(v: JobInput): FormErrors {
  const e: FormErrors = {};
  if (!v.name.trim()) e.name = "仕事名を入力してください";
  if (v.reward <= 0) e.reward = "1円以上の金額を入力してください";
  if (v.minHourlyRate <= 0) e.minHourlyRate = "最低希望時給を入力してください";
  const total = v.workHours + v.travelHours + v.prepHours + v.postHours + v.waitHours;
  if (total <= 0) e.workHours = "時間の合計が0になっています。実働時間などを入力してください";
  return e;
}

export default function Home() {
  const [values, setValues] = useState<JobInput>(DEFAULT);
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [saved, setSaved]   = useState(false);
  const [tab, setTab]       = useState<"calc" | "history">("calc");
  const { history, saveJob, deleteJob } = useHistory();

  const handleChange = useCallback((field: keyof JobInput, value: string | number) => {
    setValues((prev) => {
      if (field === "name") return { ...prev, name: String(value) };
      if (field === "burden" || field === "futureValue")
        return { ...prev, [field]: value as 1 | 2 | 3 | 4 | 5 };
      return { ...prev, [field]: parseFloat(String(value)) || 0 };
    });
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setResult(null);
    setSaved(false);
  }, []);

  const handleCalc = () => {
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setTimeout(() => {
        document.querySelector<HTMLElement>(".input.error")
          ?.closest(".field")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }
    setResult(calculate(values));
    setSaved(false);
    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const handleSave = () => {
    if (!result) return;
    saveJob(values, result);
    setSaved(true);
  };

  const handleReload = (input: JobInput) => {
    setValues(input);
    setResult(calculate(input));
    setSaved(false);
    setTab("calc");
    setTimeout(() => {
      document.getElementById("result")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const handleReset = () => {
    setValues(DEFAULT);
    setErrors({});
    setResult(null);
    setSaved(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="wrap">
      <header className="header">
        <h1 className="header-title">
          <span className="header-icon">⚖️</span>
          仕事受けるべき？チェッカー
        </h1>
        <p className="header-sub">移動・準備・経費まで含めた実質時給で判定します</p>
      </header>

      <nav className="tabs">
        <button className={`tab ${tab === "calc" ? "active" : ""}`} onClick={() => setTab("calc")}>
          計算する
        </button>
        <button className={`tab ${tab === "history" ? "active" : ""}`} onClick={() => setTab("history")}>
          履歴
          {history.length > 0 && <span className="tab-count">{history.length}</span>}
        </button>
      </nav>

      <main className="main">
        {tab === "calc" && (
          <>
            <JobForm values={values} errors={errors} onChange={handleChange} />

            <div className="actions">
              <button className="btn-calc" onClick={handleCalc}>
                実質時給を計算する
              </button>
              <button className="btn-reset" onClick={handleReset}>
                リセット
              </button>
            </div>

            {result && (
              <div id="result">
                <ResultCard result={result} onSave={handleSave} saved={saved} />
              </div>
            )}
          </>
        )}

        {tab === "history" && (
          <HistoryList history={history} onDelete={deleteJob} onReload={handleReload} />
        )}
      </main>

      <footer className="footer">計算結果はあくまで参考です。最終判断はご自身でお願いします。</footer>
    </div>
  );
}
