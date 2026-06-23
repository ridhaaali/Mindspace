"use client";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");     
    const [error, setError]=useState("")
    async function handleSubmit(event:React.FormEvent) {
        event.preventDefault();

        if(!name){
            setError("Name is required");
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

        if(!confirmPassword){
            setError("Please confirm your password");
            return;
        }

        if(password!==confirmPassword){
            setError("Passwords do not match");
            return;
        }
        setError("");
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        alert("Account created successfully!");
        setError("");
    }
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 border rounded-xl">
                <h1 className="text-3xl font-bold text-center">
                    Create Your Account
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="w-full mt-6 p-3 border"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter your email id"
                        className="w-full mt-4 p-3 border"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full mt-4 p-3 border"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full mt-4 p-3 border"
                        onChange={(event) => setConfirmPassword(event.target.value)}
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
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}