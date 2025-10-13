import FormRegister from '@/components/form-register'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const RegisterPage = async () => {
  const session = await auth()
  
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div>
      <FormRegister />
    </div>
  )
}

export default RegisterPage