"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [login, setLogin] = useState<LoginFormData>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: login.email,
      password: login.password,
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl border border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-black text-center">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={login.email}
          onChange={onChange}
          className="w-full px-4 py-3 mb-4 rounded-xl border-b-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-200"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={login.password}
          onChange={onChange}
          className="w-full px-4 py-3 mb-4 rounded-xl border-b-2 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all duration-200"
          required
        />

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-semibold text-white transition duration-200 ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-black text-center text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signUp")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
