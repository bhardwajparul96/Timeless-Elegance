import React from 'react';
import bgImage from '../assets/login-bg.jpg'; // Adjust path as needed

const LoginForm = () => (
  <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center pt-24"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="w-full max-w-md bg-white bg-opacity-90 p-6  shadow-lg">
      <h2 className="text-xl font-semibold  text-black text-center mb-4">LOGIN</h2>

      <input type="email" placeholder="Enter your email id" className="input-field mb-2" />
      <input type="password" placeholder="Password" className="input-field mb-2" />
      <p className="text-sm text-gray-500 mb-2 cursor-pointer text-right">Forgot Your Password?</p>

      <button className="w-full bg-gray-800 text-white py-2 font-semibold mb-4">LOGIN</button>

      <p className="text-center mb-4">
        <a href="/signup" className="text-blue-500 underline">New to Timeless Elegance? Create Account</a>
      </p>

      <div className="flex items-center justify-between mb-4">
        <input type="tel" placeholder="Enter Mobile Number" className="input-field w-2/3" />
        <button className="w-1/3 bg-red-700 text-white py-2">Send OTP</button>
      </div>

      <button className="w-full bg-gray-800 text-white py-2 font-semibold mb-4">LOGIN VIA OTP</button>

      <button className="w-full border flex items-center justify-center gap-2 py-2 text-gray-700 bg-white">
        <img src="https://img.icons8.com/color/16/google-logo.png" alt="google" />
        Continue with Google
      </button>
    </div>
  </div>
);

export default LoginForm;
