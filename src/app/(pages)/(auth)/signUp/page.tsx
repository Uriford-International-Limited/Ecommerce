"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface SignUpData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
}

interface SignUpErrors {
  firstName?: string;
  lastName?: string;
  mobile?: string;
  email?: string;
  password?: string;
  general?: string;
}

export default function SignUp() {
  const router = useRouter();
  const [signup, setSignUp] = useState<SignUpData>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<SignUpErrors>({});
  const [loading, setLoading] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  const validate = () => {
    const newErrors: SignUpErrors = {};
    if (!signup.firstName.trim()) newErrors.firstName = "First name is required";
    if (!signup.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!signup.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10,15}$/.test(signup.mobile)) newErrors.mobile = "Enter a valid mobile number";
    if (!signup.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(signup.email)) newErrors.email = "Email is invalid";
    if (!signup.password.trim()) newErrors.password = "Password is required";
    else if (signup.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUp((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup),
      });

      const data = await res.json();
      if (res.ok) setShowConfirmMessage(true);
      else setErrors({ general: data.message });
    } catch {
      setErrors({ general: "Network or server error" });
    } finally {
      setLoading(false);
    }
  };

  if (showConfirmMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-md text-center border shadow">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Registration Successful!
          </h2>
          <p className="text-gray-700 mb-6">
            Please check your email and{" "}
            <span className="text-blue-600 italic">confirm your registration</span>.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // সব input ফিল্ডগুলোর data এখন typed ভাবে render হচ্ছে
  const fields: Array<{ name: keyof SignUpData; type: string; placeholder: string }> = [
    { name: "firstName", type: "text", placeholder: "First Name" },
    { name: "lastName", type: "text", placeholder: "Last Name" },
    { name: "mobile", type: "text", placeholder: "Mobile Number" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md border shadow-md">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5" noValidate>
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={signup[field.name]}
                onChange={onInputChange}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 text-black placeholder-gray-500 focus:outline-none transition-all duration-200"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}

          {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-black text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
