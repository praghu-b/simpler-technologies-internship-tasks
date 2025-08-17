"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = "Name required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.password.length < 6) newErrors.password = "Password min 6 chars";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-2xl mb-4">Sign Up</h2>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="border p-2 w-full mb-2"/>
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full mb-2"/>
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full mb-2"/>
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-2">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
