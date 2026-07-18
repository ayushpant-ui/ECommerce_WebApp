import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters.")
      .max(30, "First name cannot exceed 30 characters.")
      .regex(/^[A-Za-z]+$/, "Only letters are allowed."),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters.")
      .max(30, "Last name cannot exceed 30 characters.")
      .regex(/^[A-Za-z]+$/, "Only letters are allowed."),

    email: z
      .email("Please enter a valid email address."),

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters.")
      .regex(/[A-Z]/, "Password must contain one uppercase letter.")
      .regex(/[a-z]/, "Password must contain one lowercase letter.")
      .regex(/[0-9]/, "Password must contain one number.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain one special character."
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;