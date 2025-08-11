import React, { useState } from "react";
import bgImage from "../assets/register-bg.jpg";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    otp: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center pt-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white bg-opacity-90 p-6 shadow-lg"
      >
        <h2 className="text-xl font-semibold text-black text-center mb-4">
          REGISTER WITH TIMELESS ELEGANCE
        </h2>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="input-field mb-2"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="input-field mb-2"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input-field mb-2"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between gap-2 mb-2">
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile"
            className="input-field w-2/3"
            value={formData.mobile}
            onChange={handleChange}
          />
          <button type="button" className="w-1/3 bg-red-700 text-white py-2">
            Send OTP
          </button>
        </div>
        <input
          name="otp"
          type="text"
          placeholder="Enter OTP"
          className="input-field mb-2"
          value={formData.otp}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input-field mb-2"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="input-field mb-4"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-gray-800 text-white py-2 font-semibold">
          VERIFY & REGISTER
        </button>
        <p className="text-center mt-4">
          <a href="/login" className="text-blue-500 underline">
            Already have an account? Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;


// import React from 'react';
// import bgImage from '../assets/register-bg.jpg';

// const RegisterForm = () => (
//   <div
//     className="min-h-screen bg-cover bg-center flex items-center justify-center pt-24"
//     style={{ backgroundImage: `url(${bgImage})` }}
//   >
//     <div className="w-full max-w-md bg-white bg-opacity-90 p-6  shadow-lg">
//       <h2 className="text-xl font-semibold text-black text-center mb-4">REGISTER WITH TIMELESS ELEGANCE</h2>
//       <input type="text" placeholder="First Name" className="input-field mb-2" />
//       <input type="text" placeholder="Last Name" className="input-field mb-2" />
//       <input type="email" placeholder="Email" className="input-field mb-2" />
//       <div className="flex items-center justify-between gap-2 mb-2">
//   <input
//     type="tel"
//     placeholder="Mobile"
//     className="input-field w-2/3"
//   />
//   <button className="w-1/3 bg-red-700 text-white py-2">
//     Send OTP
//   </button>
// </div>
//       <input type="text" placeholder="Enter OTP" className="input-field mb-2" />
//       <input type="password" placeholder="Password" className="input-field mb-2" />
//       <input type="password" placeholder="Confirm Password" className="input-field mb-4" />
//       <button className="w-full bg-gray-800 text-white py-2 font-semibold">VERIFY & REGISTER</button>
//       <p className="text-center mt-4">
//         <a href="/login" className="text-blue-500 underline">Already have an account? Login</a>
//       </p>
//     </div>
//   </div>
// );

// export default RegisterForm;
