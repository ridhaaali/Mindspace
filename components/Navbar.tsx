import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center">
        <h2 className="text-fuchsia-300 text-2xl font-bold">
          MindSpace
        </h2>

        <Link href="/login"
          className="px-4 py-2 bg-violet-400 rounded-lg font-medium"
        >
          Login
        </Link>
    </nav>
  );
}