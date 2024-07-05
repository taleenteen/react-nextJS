'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

export default function ContactPage() {
  const { data: session }= useSession();
    console.log(session)
  return (
    <div className='container mx-auto min-h-screen bg-gray-100'>
      <h1>Sawat d kub p</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque atque veniam possimus beatae voluptates consequuntur ex recusandae nesciunt, corporis rem.</p>
    </div>
  )
}
