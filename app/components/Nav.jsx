"use client"
import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import useSessionData from './Session'


function Nav() {
  const { session, status } = useSessionData();
  return (
    <nav className='bg-[#333] text-white p-5'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                <li><Link href="/">Home</Link></li>
                </div>
                <ul className='flex'>
      <li className='mx-3'><Link href="about">About</Link></li>
      <li className='mx-3'><Link href="services">Services</Link></li>
      <li className='mx-3'><Link href="blog">Blog</Link></li>
      <li className='mx-3'><Link href="contact">Contact</Link></li>
      {!session ? (
        <>
        <li className='mx-3 text-green-200'><Link href="login">Login</Link></li>
        <li className='mx-3 text-blue-200'><Link href="register">Register</Link></li>
        </>
      ) : (
      <>
      <li className='mx-3 text-white '><a href='/welcome' className='bg-gray-500 border py-2 px-3 rounded-md text-lg my-2'>Profile</a></li>
      <li className='mx-3 text-white '><a onClick={()=> signOut()} className='bg-red-500 border py-2 px-3 rounded-md text-lg my-2'>LogOut</a></li>
      </>
      )
    }
      
    </ul>
            </div>
        
        </div>
    </nav>
    
  )
}

export default Nav