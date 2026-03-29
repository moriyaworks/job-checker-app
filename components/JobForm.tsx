"use client";

import React from "react";
import { JobInput, FormErrors } from "@/lib/types";

interface Props {
  values: JobInput;
  errors: FormErrors;
  onChange: (field: keyof JobInput, value: string | number) => void;
}

function NumField({
  label, field, value, error, onChange, unit, placeholder, step, optional,
}: {
  label: string; field: keyof JobInput; value: number; error?: string;
  onChange: (f: keyof JobInput, v: string) => void;
  unit: string; placeholder?: string; step?: number; optional?: boolean;
}) {
  return (
    <div className="field">
      <div className="field-label">
        {label}
        {optional && <span className="optional">任意</span>}
      </div>
      <div className="input-row">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step={step ?? 0.5}
          value={value || ""}
          placeholder={placeholder ?? "0"}
          onChange={(e) => onChange(field, e.target.value)}
          className={`input ${error ? "error" : ""}`}
        />
        <span className="unit">{unit}</span>
      </div>
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

function ScaleField({
  label, field, value, low, high, onChange,
}: {
  label: string; field: keyof JobInput; value: number;
  low: string; high: string;
  onChange: (f: keyof JobInput, v: number) => void;
}) {
  return (
    <div className="field">
      <div className="field-label">{label}</div>
      <div className="scale-row">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`scale-btn ${value === n ? "on" : ""}`}
            onClick={() => onChange(field, n)}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="scale-hint">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  );
}

export function JobForm({ values, errors, onChange }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="card">
        <p className="card-title">基本情報</p>
        <div className="field">
          <div className="field-label">仕事名</div>
          <input
            type="text"
            value={values.name}
            placeholder="例：Aさん宅でのベビーシッター"
            onChange={(e) => onChange("name", e.target.value)}
            className={`input ${errors.name ? "error" : ""}`}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}
        </div>
        <NumField label="報酬額" field="reward" value={values.reward}
          error={errors.reward} onChange={onChange} unit="円" placeholder="10000" step={500} />
        <NumField label="最低希望時給" field="minHourlyRate" value={values.minHourlyRate}
          error={errors.minHourlyRate} onChange={onChange} unit="円/h" placeholder="1500" step={100} />
      </div>

      <div className="card">
        <p className="card-title">時間の内訳</p>
        <NumField label="実働時間" field="workHours" value={values.workHours}
          error={errors.workHours} onChange={onChange} unit="時間" placeholder="3" />
        <NumField label="移動時間（往復）" field="travelHours" value={values.travelHours}
          error={errors.travelHours} onChange={onChange} unit="時間" placeholder="1" />
        <NumField label="準備時間" field="prepHours" value={values.prepHours}
          error={errors.prepHours} onChange={onChange} unit="時間" placeholder="0.5" />
        <NumField label="後処理時間" field="postHours" value={values.postHours}
          error={errors.postHours} onChange={onChange} unit="時間" placeholder="0.5" />
        <NumField label="待機時間" field="waitHours" value={values.waitHours}
          error={errors.waitHours} onChange={onChange} unit="時間" placeholder="0" optional />
      </div>

      <div className="card">
        <p className="card-title">経費</p>
        <NumField label="交通費" field="transportCost" value={values.transportCost}
          error={errors.transportCost} onChange={onChange} unit="円" placeholder="500" step={100} />
        <NumField label="その他雑費" field="otherCost" value={values.otherCost}
          error={errors.otherCost} onChange={onChange} unit="円" placeholder="0" step={100} optional />
      </div>

      <div className="card">
        <p className="card-title">主観評価（時給の調整に使います）</p>
        <ScaleField label="負担感" field="burden" value={values.burden}
          low="楽" high="きつい" onChange={onChange} />
        <ScaleField label="将来性" field="futureValue" value={values.futureValue}
          low="低い" high="高い" onChange={onChange} />
      </div>
    </div>
  );
}
