"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

export default function Dashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {user && (
        <p className="text-gray-600">
          Welcome, {user.email}
        </p>
      )}

      <button
        onClick={logout}
        className="bg-fuchsia-200 text-black px-6 py-3 border border-black rounded-xl hover:bg-fuchsia-100"
      >
        Logout
      </button>
    </div>
  );
}