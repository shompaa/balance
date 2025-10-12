"use server"

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { loginSchema, registerSchema } from "@/lib/zod";
import bcrypt from "bcryptjs";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import z from "zod";

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
  try {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirectTo: "/dashboard",
    })

    return { success: true }
  } catch (error) {
    // Si es un redirect, re-lanzarlo (es comportamiento esperado)
    if (isRedirectError(error)) {
      throw error;
    }

    // Cualquier otro error
    console.error("Login error:", error);
    return { error: "Credenciales inválidas" };
  }
}

export const registerAction = async (values: z.infer<typeof registerSchema>) => {
  try {

    const { data, success } = registerSchema.safeParse(values);

    if (!success) {
      return { error: "Datos inválidos" };
    }

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (user) {
      return { error: "Usuario ya existe" };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirectTo: "/dashboard",
    })

    return { success: true };
  } catch (error) {
    // Si es un redirect, re-lanzarlo (es comportamiento esperado)
    if (isRedirectError(error)) {
      throw error;
    }

    // Cualquier otro error
    console.error("Register error:", error);
    return { error: "Error al registrar usuario" };
  }
}