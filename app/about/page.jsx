"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

function AboutPage() {

    const { data: session }= useSession();
    console.log(session)

  return (
    <div className='container mx-auto min-h-screen bg-gray-100'>
      <div>
        <h3 className='text-3xl my-3'>Welcome {session?.user?.name}</h3>
        <p className='mb-3'>Email : {session?.user?.email}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis quo cumque fugiat fuga culpa ipsum veritatis, recusandae suscipit amet?</p>

      </div>
    </div>
  )
}

export default AboutPage
