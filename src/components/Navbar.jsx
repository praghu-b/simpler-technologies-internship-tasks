"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="font-bold text-xl">InternshipTask</div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>Menu</button>
      <ul className={`md:flex gap-6 ${open ? "block" : "hidden"}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );
}
