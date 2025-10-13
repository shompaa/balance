import { auth } from "@/auth"
import LogOutButton from "@/components/logout-button"
import { redirect } from "next/navigation"
 
export default async function DashboardPage() {
  const session = await auth()
 
  if (!session) {
    redirect("/login")
  }
 
  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogOutButton />
    </div>
  )
}