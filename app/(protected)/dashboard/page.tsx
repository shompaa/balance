import { auth } from "@/auth"
import { redirect } from "next/navigation"
 
export default async function DashboardPage() {
  const session = await auth()
 
  if (!session) {
    redirect("/login")
  }
 
  return (
    <div className="container">
      Dashboard
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}