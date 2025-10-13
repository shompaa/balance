/* eslint-disable @typescript-eslint/no-explicit-any */
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "./lib/zod"
import { prisma } from "./lib/prisma"
import bcrypt from "bcryptjs"

const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const { success, data } = loginSchema.safeParse(credentials);
        if (!success) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: data.email }
        });

        if (!user?.password) {
          return null;
        }

        const isValid = await bcrypt.compare(data.password, user.password);

        if (!isValid) {
          return null;
        }

        // TODO: Habilitar verificación de email después
        // if (!user.emailVerified) {
        //   const verifyTokenExists = await prisma.verificationToken.findFirst(
        //     { where: { identifier: user.email } }
        //   );

        //   console.log({ verifyTokenExists })

        //   // if (verifyTokenExists?.identifier) {
        //   //   await prisma.verificationToken.deleteMany({
        //   //     where: { identifier: user.email }
        //   //   });

        //   // }
        //   // const token = nanoid();
        //   // await prisma.verificationToken.create({
        //   //   data: {
        //   //     identifier: user.email,
        //   //     token: token.toString(),
        //   //     expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
        //   //   }
        //   // });


        //   throw new Error("Token enviado. Por favor, verifica tu correo.");
        // }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }: { auth: any; request: any }) {
      const isLoggedIn = !!auth?.user;
      const publicRoutes = ["/login", "/register", "/forgot-password", "/reset-password", "/api/auth/verify-email", "/", "/error"];
      const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

      if (!isLoggedIn && !isPublicRoute) {
        return false; // Redirect to login page
      }

      return true;
    },
    jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      session.user.id = token.id
      return session
    },
  },
}

export default authConfig;