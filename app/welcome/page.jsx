"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

function WelcomePage() {

    const { data: session }= useSession();
    console.log(session)

  return (
    <div>
      <div className='container mx-auto'>
        <h3 className='text-3xl my-3'>Welcome {session?.user?.name}</h3>
        <p>Email : {session?.user?.email}</p>
        <hr className='my-3' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis quo cumque fugiat fuga culpa ipsum veritatis, recusandae suscipit amet?</p>

      </div>
    </div>
  )
}

export default WelcomePage
