"use client"
import { signOut } from 'next-auth/react'

export const handleLogout = async () => {
  await signOut({ redirect: true, redirectTo: '/login' })
}