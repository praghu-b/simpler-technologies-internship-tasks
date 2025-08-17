"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // 👈 for toggle

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = "Name required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.password.length < 6)
      newErrors.password = "Password min 6 chars";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Your account has been created successfully!");
      setForm({ name: "", email: "", password: "" });
      router.push("/");
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen flex items-center justify-center py-12">
      <div className="text-center space-y-5">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-96">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 mb-2">{errors.email}</p>}

            {/* Password with show/hide toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 mb-2">{errors.password}</p>
            )}

            <button className="bg-blue-500 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-blue-600 transition-colors">
              Sign Up
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>
          </p>
        </div>
        <h3 className="text-gray-600">
          Added Basic Validations for Sign Up
        </h3>
      </div>
    </section>
  );
}
