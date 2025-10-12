import { auth } from '@/auth'
import LogOutButton from '@/components/logout-button';
import React from 'react'

const AdminPage = async () => {
  const session = await auth();

  console.log({ session })

  if (session?.user?.role !== 'ADMIN') {
    return <div>No autorizado</div>
  }


  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogOutButton />
    </div>
  )
}

export default AdminPage