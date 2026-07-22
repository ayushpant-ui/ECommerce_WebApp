"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import GoogleButton from "./GoogleButton";

import {
  registerSchema,
  RegisterSchema,
} from "../schemas/auth.schema";

import { registerUser } from "@/services/auth.service";


export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  async function onSubmit(data: RegisterSchema) {
    try {
      const { confirmPassword, ...userData } = data;
      const response = await registerUser(data);

      console.log(response);

      alert("Registration Successful");

      reset();
    } catch (error) {
      console.error(error);

      alert("Registration Failed");
    }
  }

  function handleGoogleLogin() {
    console.log("Google Login Clicked");
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-full max-w-xl rounded-3xl border bg-white p-8 shadow-2xl"
      >
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Register to start shopping.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <AuthInput
              label="First Name"
              placeholder="John"
              register={register("firstName")}
              error={errors.firstName}
            />

            <AuthInput
              label="Last Name"
              placeholder="Doe"
              register={register("lastName")}
              error={errors.lastName}
            />
          </div>

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

          <PasswordStrength
            password={password}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Password"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />

          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            disabled={isSubmitting}
            type="submit"
            className="flex w-full items-center justify-center rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="mr-2 animate-spin"
                  size={20}
                />

                Creating Account...
              </>
            ) : (
              "Create Account"
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

        {/* Google Button */}

        <GoogleButton
          onClick={handleGoogleLogin}
        />

        {/* Login */}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}