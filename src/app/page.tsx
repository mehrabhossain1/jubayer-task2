"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "Male",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
    };

    // Full Name validation (alphabets only)
    if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Full Name must contain only alphabets.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Password validation (minimum 8 characters)
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    // Confirm Password validation (must match password)
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    // Date of Birth validation (required field)
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of Birth is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);
      alert("Registration successful!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-1/3">
        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName}</span>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">{errors.confirmPassword}</span>
          )}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          />
          {errors.dateOfBirth && (
            <span className="text-red-500">{errors.dateOfBirth}</span>
          )}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-2 mt-4 w-full rounded-lg hover:from-blue-700 hover:to-pink-600 transition-all duration-500"
        >
          Register
        </button>
      </form>
    </div>
  );
}
