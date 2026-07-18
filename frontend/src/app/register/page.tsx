"use client";

import RegisterForm from "@/components/RegisterForm";
import { motion } from "framer-motion";

export default function RegisterPage() {

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-100 px-6 py-12">

      {/* Background Blobs */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="hidden lg:block"
        >
          <h1 className="text-6xl font-black leading-tight">
            Create
            <span className="block text-blue-600">
              Your Account
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Join thousands of happy customers and discover amazing products with secure shopping.
          </p>

          <motion.img
            src="/register.png"
            alt="Register"
            className="mt-12"
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          />
        </motion.div>

        {/* Form */}

        <RegisterForm />

      </div>

    </section>
  );
}