'use client'
import { useSession } from "next-auth/react"

export default function ServicesPage() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <div className="container mx-auto min-h-screen bg-gray-100">
      <p className="flex justify-center py-5 ">Signed in as {session.user.email}</p>
    </div>
  }

  return <div className="container mx-auto min-h-screen bg-gray-100">
    <a href="/api/auth/signin">Sign in</a>
  </div>
}