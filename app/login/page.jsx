"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react';
import { useRouter, redirect } from 'next/navigation'
import { useSession } from 'next-auth/react';

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const { data: session } = useSession();
    if (session) router.replace('welcome');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await signIn("credentials", {
                email, password, redirect: false
            })

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            router.replace("welcome");

        } catch(error) {
            console.log(error);
        }
    }

  return (
    <div>
      <div className='container mx-auto py-5'>
        <h3>Login Page</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit}>

        {
                error && (
                    <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                        {error}
                    </div>
             )}

            <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your email' />
            <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your password' />
            <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sign in</button>
        </form>
        <hr className='my-3' />
        <p>Don't have an account? go to <Link href="/register" className='text-blue-500 hover:underline'>Register </Link> </p>
      </div>
    </div>
  )
}

export default LoginPage