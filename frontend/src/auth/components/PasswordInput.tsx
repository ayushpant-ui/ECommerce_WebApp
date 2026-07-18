"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function PasswordInput({
  label,
  placeholder,
  register,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">

      {/* Label */}

      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Input */}

      <div className="relative">

        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          className={`
            w-full
            rounded-xl
            border
            px-4
            py-3
            pr-12
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

        {/* Eye Icon */}

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-500
            hover:text-black
            transition-colors
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

      {/* Error */}

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}