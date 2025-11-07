import React from 'react'
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { auth } from '@/auth'
import { redirect } from "next/navigation"

export default async function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  // Preparar datos del usuario para el sidebar
  const user = session.user ? {
    name: session.user.name || "Usuario",
    email: session.user.email || "",
    avatar: session.user.image || "/avatars/default.jpg",
  } : undefined

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar user={user} />
          <SidebarInset>
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
