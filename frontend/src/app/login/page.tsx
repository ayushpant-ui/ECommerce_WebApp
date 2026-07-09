"use client";

import { motion } from "framer-motion";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-100">

      {/* Background Blur */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          className="hidden lg:block"
        >
          <h1 className="text-6xl font-black">
            Welcome
            <span className="block text-blue-600">
              Back.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Login to manage your orders, wishlist,
            shopping cart and account.
          </p>

          <motion.img
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            src="/login.png"
            className="mt-12"
            alt=""
          />
        </motion.div>

        {/* Right */}

        <LoginForm />

      </div>

    </section>
  );
}