import React from "react";

interface TextAreaProps {
  id?: string; // ✅ WAJIB ADA
  name?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  value,
  onChange,
  rows = 4,
  disabled = false,
  error = false,
  hint,
  className = "",
}) => {
  return (
    <div className="relative">
      <textarea
        id={id} // ✅ WAJIB DISERTAKAN DI SINI
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        disabled={disabled}
        className={`w-full rounded-lg border px-4 py-2 text-sm shadow-sm focus:outline-none ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-brand-500"
        } dark:bg-gray-900 dark:border-gray-700 dark:text-white ${className}`}
      />
      {error && hint && (
        <p className="mt-1 text-xs text-red-500 dark:text-red-400">{hint}</p>
      )}
    </div>
  );
};

export default TextArea;
