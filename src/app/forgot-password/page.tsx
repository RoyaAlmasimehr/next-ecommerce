"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/auth/send-reset-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Check your email for the password reset link.");
      } else {
        setMessage(data.message || "Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form.");
    }
  };

  return (
    <div className="flex justify-center min-h-screen mt-20">
      <div className="p-8 space-y-6">
        <h2 className="text-5xl font-bold uppercase pb-10">Forgot Password</h2>
        <p>{message}</p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-900 uppercase"
            >
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="text-[14px] font-bold bg-white uppercase text-black border-2 border-black px-12 h-14 mt-2 mb-4 hover:bg-black hover:text-white transition ease-in-out duration-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>
        <Link href="/my-account" className="text-sm text-gray-800">
          Back to Login
        </Link>
      </div>
    </div>
  );
}
