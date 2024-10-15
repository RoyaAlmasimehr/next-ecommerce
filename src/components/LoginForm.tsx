"use client"; // حتما این خط را برای استفاده از state اضافه کنید.
import { useState } from "react";
import { useRouter } from "next/navigation"; // استفاده از next/navigation
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false, // اضافه کردن وضعیت برای remember me
  });

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful");
        router.push("/behind-the-art");
      } else {
        alert(data.message || "Error logging in");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="flex justify-center min-h-screen mt-20">
      <div className="w-full p-8 space-y-6">
        <h2 className="text-5xl font-bold uppercase">Login</h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-900 uppercase"
            >
              email address <span>*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-gray-900 uppercase"
            >
              Password <span>*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
              required
            />
          </div>

          <div className="">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="text-[14px] font-bold bg-white uppercase text-black border-2 border-black px-12 h-14 mt-2 mb-4 hover:bg-black hover:text-white transition ease-in-out duration-500"
            >
              Log in
            </button>
          </div>
          <div className="text-sm ">
            <Link
              href="/forgot-password"
              className="font-medium text-gray-700 "
            >
              Lost your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
