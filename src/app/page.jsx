'use client'
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Task Page</h1>
          <p className="text-gray-700 mb-6">
            This page contains both - <strong>Navbar and User Card components</strong> you've asked. Please click the below button to go <strong>Sign Up page.</strong>
          </p>
          <a
            onClick={() => router.push('/signup')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Go to Sign Up
          </a>
        </div>
      </section>

      {/* User Cards Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">User Card Components</h2>
          <div className="flex flex-wrap justify-center">
            <UserCard name="Prakash" email="prakash@example.com" />
            <UserCard name="Jane Doe" email="jane@example.com" />
            <UserCard name="John Smith" email="john@example.com" />
          </div>
        </div>
      </section>
    </div>
  );
}
