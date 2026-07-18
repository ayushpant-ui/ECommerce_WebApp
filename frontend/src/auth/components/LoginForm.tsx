"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import GoogleButton from "./GoogleButton";

import {
  loginSchema,
  LoginSchema,
} from "../schemas/login.schema";

// import { loginUser } from "../services/auth.service";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid,
    },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      console.log(data);

      // const response = await loginUser(data);

      alert("Login Successful");
    } catch (error) {
      console.error(error);

      alert("Login Failed");
    }
  }

  function handleGoogleLogin() {
    console.log("Google Login");
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg rounded-3xl border bg-white p-8 shadow-2xl"
      >
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to continue shopping.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >
          <AuthInput
            label="Email Address"
            type="email"
            placeholder="john@gmail.com"
            register={register("email")}
            error={errors.email}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter Password"
            register={register("password")}
            error={errors.password}
          />

          <div className="flex items-center justify-between text-sm">
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

            <Link
              href="/register"
              className="text-blue-600 hover:underline hover:cursor-pointer"
            >
              Register
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={!isValid || isSubmitting}
            className="flex w-full items-center justify-center rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="mr-2 animate-spin"
                  size={20}
                />
                Logging In...
              </>
            ) : (
              "Login"
            )}
          </motion.button>
        </form>

        {/* Divider */}

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-300" />

          <span className="text-sm text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {/* Google Login */}

        <GoogleButton
          onClick={handleGoogleLogin}
        />
      </motion.div>
    </section>
  );
}