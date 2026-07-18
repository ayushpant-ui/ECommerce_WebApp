"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`
          w-full
          rounded-xl
          border
          px-4
          py-3
          text-sm
          outline-none
          transition-all
          duration-300

          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          }
        `}
      />

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}