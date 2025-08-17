export default function UserCard({ name, email }) {
  return (
    <div className="border p-4 rounded shadow-md w-64 m-2">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}
