"use client"
import { useState } from "react";



export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("User registered successfully");
      } else {
        alert(data.message || "Error registering user");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="flex justify-center min-h-screen mt-20">
      <div className="w-full p-8 space-y-6">
        <h2 className="text-5xl font-bold uppercase">Register</h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-xs font-semibold text-gray-900 uppercase"
            >
              Username <span>*</span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-900 uppercase"
            >
              Email address <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
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
              className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="newsletter"
              name="newsletter"
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="newsletter" className="ml-2 text-sm text-gray-900">
              Subscribe to our newsletter
            </label>
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>

          <div>
            <button
              type="submit"
              className="text-[14px] font-bold bg-white uppercase text-black border-2 border-black px-12 h-14 mt-2 mb-4 hover:bg-black hover:text-white transition ease-in-out duration-500 hover:text-black"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}