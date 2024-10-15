"use client"
import { useState } from "react";

export default function ResetPassword({ searchParams }) {
  const [password, setPassword] = useState("");
  const { token, email } = searchParams; // دریافت توکن و ایمیل از URL

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, token }), // ارسال توکن به API
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      // می‌توانید کارهای بیشتری مثل هدایت به صفحه ورود انجام دهید
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex justify-center min-h-screen mt-20">
      <div className=" p-8 space-y-6">
        <h2 className="text-5xl font-bold uppercase">Reset Password</h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-gray-900 uppercase"
            >
              New Password <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="text-[14px] font-bold bg-white uppercase text-black border-2 border-black px-12 h-14 mt-2 mb-4 hover:bg-black hover:text-white transition ease-in-out duration-500"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
