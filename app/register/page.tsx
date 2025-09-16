"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-md border border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        {/* Toggle */}
        <div className="flex mb-6 bg-gray-100 rounded-xl overflow-hidden shadow-md">
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ${
              !isLogin
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                : "text-gray-800 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 text-lg font-semibold transition-all duration-300 ${
              isLogin
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "text-gray-800 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
        </div>

        {/* Form */}
        {!isLogin ? (
          <form className="space-y-4 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Create Account
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              className="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              className="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-indigo-400 outline-none transition"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
            >
              Register
            </button>
          </form>
        ) : (
          <form className="space-y-4 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Welcome Back
            </h2>
            <input
              type="email"
              placeholder="Email Address"
              autoComplete="username"
              className="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full px-4 py-2 border border-gray-300 bg-white text-black placeholder-black rounded-lg shadow-md focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-green-600 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
