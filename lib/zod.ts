import { object, string } from "zod"

export const loginSchema = object({
  email: string({ message: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ message: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})

export const registerSchema = object({
  name: string({ message: "Name is required" })
    .min(1, "Name is required"),
  email: string({ message: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ message: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
}) 