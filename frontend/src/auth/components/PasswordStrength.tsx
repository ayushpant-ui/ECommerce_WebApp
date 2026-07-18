"use client";

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({
  password,
}: PasswordStrengthProps) {
  let score = 0;

  // Minimum Length
  if (password.length >= 8) score++;

  // Uppercase
  if (/[A-Z]/.test(password)) score++;

  // Lowercase
  if (/[a-z]/.test(password)) score++;

  // Number
  if (/[0-9]/.test(password)) score++;

  // Special Character
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

  let label = "";
  let width = "";
  let color = "";

  if (password.length === 0) {
    label = "";
    width = "0%";
    color = "bg-gray-300";
  } else if (score <= 2) {
    label = "Weak";
    width = "33%";
    color = "bg-red-500";
  } else if (score <= 4) {
    label = "Medium";
    width = "66%";
    color = "bg-yellow-500";
  } else {
    label = "Strong";
    width = "100%";
    color = "bg-green-500";
  }

  return (
    <div className="mt-2">

      {/* Progress Bar */}

      <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">

        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width }}
        />

      </div>

      {/* Strength Label */}

      {password && (
        <p className="mt-2 text-sm text-gray-600">
          Password Strength :
          <span className="ml-1 font-semibold">
            {label}
          </span>
        </p>
      )}

    </div>
  );
}