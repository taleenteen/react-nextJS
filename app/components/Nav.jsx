"use client"
import React, { useState } from "react";
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import useSessionData from './Session'
import "./Navbar.css";

function Nav() {
  const { session, status } = useSessionData();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <li><Link href="/">Home</Link></li>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link href="about">About</Link></li>
        <li><Link href="services">Services</Link></li>
        <li><Link href="contact">Contact</Link></li>
        <li><Link href="blog">Blog</Link></li>
        {!session ? (
          <>
            <li className='text-green-200'><Link href="login">Login</Link></li>
            <li className='text-blue-200'><Link href="register">Register</Link></li>
          </>
        ) : (
          <>
            <li className='text-white'><a href='/welcome' className='bg-gray-500 border  rounded-md  '>Profile</a></li>
            <li className='text-white'><a onClick={() => signOut()} className='bg-red-500 border rounded-md  '>LogOut</a></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;