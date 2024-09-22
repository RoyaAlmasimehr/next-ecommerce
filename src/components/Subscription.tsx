"use client";
import React, { useState } from "react";
import { Yantramanav } from "@next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const yantramanav = Yantramanav({
  weight: ["900", "700"],
  subsets: ["latin"],
});

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribeToNewsletter();
  };

  const subscribeToNewsletter = async () => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        alert("Subscription successful!");
        setEmail("");
        setName("");
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="bg-cover bg-center py-12 px-4 md:px-16 lg:px-32 xl:px-64"
      style={{
        backgroundImage:
          "url('https://kouchinni.com/wp-content/uploads/2023/11/Kouchinni-Stairway.svg')",
      }}
    >
      <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-2 p-6 bg-white bg-opacity-80 shadow-lg">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex flex-col gap-8">
          <h2
            className={`${yantramanav.className} text-5xl uppercase font-semibold`}
          >
            Welcome to club kouchinni
          </h2>
          <p
            className={`${roboto.className} text-[15px] text-gray-600 font-semibold`}
          >
            Enjoy 10% discount on your first purchase and receive the latest
            news & updates in your mailbox.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 h-12 border-b-2 border-black bg-transparent w-full focus:outline-none  focus:ring-0 transition duration-200 placeholder-gray-500 hover:cursor-pointer"
                required
              />
            </div>
            <button
              type="submit"
              className={`${yantramanav.className} w-full text-[14px] font-bold bg-black uppercase text-white px-4 h-12 hover:bg-butShop transition ease-in-out duration-500 hover:text-black hover:border hover:border-black`}
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2 pl-8">
          <Image
            src="https://kouchinni.com/wp-content/uploads/2024/04/Franklin-Bear-x-Kouchinni-Campagne-Shoot-Utrecht-02785.jpg"
            alt="Subscription Image"
            width={400}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
