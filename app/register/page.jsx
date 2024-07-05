"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.replace("/welcome");
        }
    }, [session, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Password do not match!");
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            setError("Please complete all inputs!");
            return;
        }

        try {
            const resCheckUser = await fetch("http://localhost:3000/api/checkUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const { user } = await resCheckUser.json();
            if (user) {
                setError("User already exists!");
                return;
            }

            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });

            if (res.ok) {
                const form = e.target;
                setError("");
                setSuccess("User registration successfully.");
                form.reset();
            } else {
                console.log("User registration failed.");
            }
            
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
                <h3 className="text-2xl font-bold text-center">Register Page</h3>
                <hr className='my-3' />
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className='bg-red-500 w-full text-sm text-white py-1 px-3 rounded-md'>
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className='bg-green-500 w-full text-sm text-white py-1 px-3 rounded-md'>
                            {success}
                        </div>
                    )}
                    <input
                        onChange={(e) => setName(e.target.value)}
                        className='block w-full bg-gray-300 p-2 rounded-md'
                        type="text"
                        placeholder='Enter your name'
                    />
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
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='block w-full bg-gray-300 p-2 rounded-md'
                        type="password"
                        placeholder='Confirm your password'
                    />
                    <button type='submit' className='w-full bg-green-500 p-2 rounded-md text-white'>
                        Sign up
                    </button>
                </form>
                <p className="text-center">Already have an account? Go to <Link href="/login" className='text-blue-500 hover:underline'>Login</Link></p>
            </div>
        </div>
    );
}

export default RegisterPage;