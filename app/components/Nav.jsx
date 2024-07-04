import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <ul className='flex justify-center bg-blue-900 p-3'>
        <li><Link className='text-white' href="/">Home</Link></li>
      <li><Link className='text-white' href="about">About</Link></li>
      <li><Link className='text-white' href="services">Services</Link></li>
      <li><Link className='text-white' href="blog">Blog</Link></li>
      <li><Link className='text-white' href="contact">Contact</Link></li>
    </ul>
  )
}

export default Nav
