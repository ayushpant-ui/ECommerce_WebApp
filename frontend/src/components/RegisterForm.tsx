"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
} from "lucide-react";
import Link from "next/link";

export default function RegisterForm() {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
    >
      <h2 className="text-4xl font-bold">
        Create Account
      </h2>

      <p className="mt-2 text-gray-500">
        Register to start shopping.
      </p>

      <form className="mt-8 space-y-5">

        <div className="grid gap-5 md:grid-cols-2">

          <div className="relative">

            <User className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none transition focus:border-black"
            />

          </div>

          <div className="relative">

            <User className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none transition focus:border-black"
            />

          </div>

        </div>

        <div className="relative">

          <Mail className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border py-4 pl-12 pr-4 outline-none transition focus:border-black"
          />

        </div>

        <div className="relative">

          <Lock className="absolute left-4 top-4 text-gray-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-xl border py-4 pl-12 pr-12 outline-none transition focus:border-black"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>

        </div>

        <div className="relative">

          <Lock className="absolute left-4 top-4 text-gray-400" />

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full rounded-xl border py-4 pl-12 pr-12 outline-none transition focus:border-black"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-4"
          >
            {showConfirm ? <EyeOff /> : <Eye />}
          </button>

        </div>

        <div>

          <div className="mb-2 flex justify-between text-sm">

            <span>Password Strength</span>

            <span className="font-medium text-green-600">
              Strong
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-200">

            <div className="h-full w-3/4 rounded-full bg-green-500" />

          </div>

        </div>

        <button
          className="w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-gray-900"
        >
          Create Account
        </button>

        <div className="relative text-center">

          <div className="absolute left-0 right-0 top-1/2 border-t" />

          <span className="relative bg-white px-4 text-gray-500">
            OR
          </span>

        </div>

        <button
          type="button"
          className="w-full rounded-xl border py-4 font-semibold transition hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <p className="text-center text-gray-500">

          Already have an account?

          <Link
            href="/login"
            className="ml-2 font-semibold text-blue-600"
          >
            Login
          </Link>

        </p>

      </form>

    </motion.div>
  );
}