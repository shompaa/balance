"use client"
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const LogOutButton = () => {

  const handleClick = async () => {
    await signOut({ redirect: true, redirectTo: '/login' })
  }

  return (
    <Button onClick={handleClick}>Log Out</Button>
  )
}

export default LogOutButton