import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Internship Tasks</h1>
        <div className="flex flex-wrap">
          <UserCard name="Prakash" email="prakash@example.com" />
          <UserCard name="Jane Doe" email="jane@example.com" />
        </div>
      </div>
    </div>
  );
}
