import Link from "next/link";
export default function LoginPage() {
  return(
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 border rounded-xl">
            <h1 className="text-3xl font-bold text-center">
                Welcome Back
            </h1>
            <input
                type="email"
                placeholder="Enter your email id"
                className="w-full mt-6 p-3 border"
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-4 p-3 border">
            </input>
            <div className="flex justify-center mt-6">
                <button className=" bg-fuchsia-200 text-black px-6 py-3 border border-b-black rounded-xl hover:bg-fuchsia-100">
                    Login
                </button>
            </div>
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