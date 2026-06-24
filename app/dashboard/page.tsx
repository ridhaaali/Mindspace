"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.replace("/login");
        return;
      }

      setLoading(false);
    }

    checkSession();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }
  async function logout() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logout}>
        Logout
      </button>
    </>
  );

}