import FormLogin from '@/components/form-login'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const LoginPage = async () => {
  const session = await auth()
  
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div>
      <FormLogin />
    </div>
  )
}

export default LoginPage