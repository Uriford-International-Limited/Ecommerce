"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function ExistPage() {
  const router = useRouter();

  const handleLogout = () => {
    alert("You have been logged out successfully.");
    router.push("/"); 
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6 sm:p-10">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-10 text-center max-w-md w-full">
        <LogOut className="w-12 h-12 mx-auto text-purple-800 mb-6" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Exit Dashboard
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Are you sure you want to exit your vendor dashboard?
        </p>
        <button
          onClick={handleLogout}
          className="bg-purple-800 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
