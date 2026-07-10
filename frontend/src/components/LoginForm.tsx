"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {

  const [show, setShow] = useState(false);

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: .6 }}

      className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"

    >

      <h2 className="text-4xl font-bold">
        Sign In
      </h2>

      <p className="mt-2 text-gray-500">
        Continue shopping with your account.
      </p>

      <form className="mt-8 space-y-6">

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
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full rounded-xl border py-4 pl-12 pr-12 outline-none transition focus:border-black"
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-4"
          >
            {show ? <EyeOff /> : <Eye />}
          </button>

        </div>

        <button
          className="w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-gray-900"
        >
          Login
        </button>

        <div className="flex justify-between text-sm">

          <button
            type="button"
            className="text-blue-600"
          >
            Forgot Password?
          </button>

          <button
            type="button"
            className="text-blue-600"
          >
          <Link href="/register">
            Register
          </Link>
          </button>

        </div>

        <div className="relative text-center">

          <div className="absolute left-0 right-0 top-1/2 border-t" />

          <span className="relative bg-white px-4 text-gray-500">
            OR
          </span>

        </div>

        <button
          type="button"
          className="w-full rounded-xl border py-4 font-semibold transition hover:bg-gray-50"
        >
          Continue with Google
        </button>

      </form>

    </motion.div>

  );
}