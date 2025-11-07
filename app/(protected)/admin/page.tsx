import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const AdminPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login')
  }

  if (session?.user?.role !== 'ADMIN') {
    redirect('/dashboard')
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

export default AdminPage