"use client";

import { useState } from "react";
import IconFooer from "./IconFooter";

const LeaveReplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., API call
    console.log(formData);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 rounded-lg mb-16">
        <h3 className="text-4xl font-bold mb-4 uppercase">Leave a Reply</h3>
        <p className="text-xs pb-8 pt-3 ">
          Leave a message and feel free to ask anything
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 h-48 border-b-2 border-black bg-transparent w-full focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 h-12 border-b-2 border-black bg-transparent w-1/2 focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 h-12 border-b-2 border-black bg-transparent w-1/2  focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-4  text-xs font-semibold uppercase  bg-white text-black border border-black shadow hover:bg-black hover:text-white transition-colors duration-300"
          >
            send message
          </button>
        </form>
      </div>
      <IconFooer />
    </>
  );
};

export default LeaveReplyForm;
