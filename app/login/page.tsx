"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("");
    const router = useRouter();
    async function handleSubmit(event:React.FormEvent) {
        event.preventDefault();

        if (!email && !password) {
            setError("Email and password are required");
            return;
        }

        if(!email){
            setError("Email is required");
            return;
        }

        if(!password){
            setError("Password is required");
            return;
        }

        setError("");
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        router.push("/dashboard");
    }
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 border rounded-xl">
                <h1 className="text-3xl font-bold text-center">
                    Welcome Back
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email id"
                        className="w-full mt-6 p-3 border"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full mt-4 p-3 border"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {error && 
                    (
                        <p className="mt-3 text-red-500 text-sm">
                        {error}
                        </p>
                    )
                    }
                    <div className="flex justify-center mt-6">
                        <button type="submit" className=" bg-fuchsia-200 text-black px-6 py-3 border border-b-black rounded-xl hover:bg-fuchsia-100">
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p>
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-purple-300 hover:text-purple-200">
                                Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}