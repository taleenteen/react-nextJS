"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            router.replace('welcome');
        }
    }, [session, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email, password, redirect: false
            });

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
                <h3 className="text-2xl font-bold text-center">Login Page</h3>
                <hr className='my-3' />
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className='bg-red-500 w-full text-sm text-white py-1 px-3 rounded-md'>
                            {error}
                        </div>
                    )}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='block w-full bg-gray-300 p-2 rounded-md'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='block w-full bg-gray-300 p-2 rounded-md'
                        type="password"
                        placeholder='Enter your password'
                    />
                    <button type='submit' className='w-full bg-green-500 p-2 rounded-md text-white'>
                        Sign in
                    </button>
                </form>
                <hr className='my-3' />
                <p className="text-center">Don't have an account? Go to <Link href="/register" className='text-blue-500 hover:underline'>Register</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;