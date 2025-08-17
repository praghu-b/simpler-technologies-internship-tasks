export default function UserCard({ name, email }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-64 m-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
          {name.charAt(0)}
        </div>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{email}</p>
      </div>
    </div>
  );
}
