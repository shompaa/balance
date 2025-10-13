// Middleware deshabilitado por límite de 1MB en Vercel Edge Runtime (plan gratuito)
// La protección de rutas se maneja directamente en cada página con auth() y redirect()

// Para habilitar el middleware en el futuro:
// 1. Upgrade a Vercel Pro (límite de 4MB)
// 2. O migra a Railway/Render que no tienen esta limitación

// export { auth as middleware } from "@/auth"

// export const config = {
//   matcher: [
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',
//   ],
// }
