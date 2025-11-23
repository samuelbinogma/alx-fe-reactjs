// src/components/UserCard.jsx
export default function UserCard({ user }) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 overflow-hidden border border-gray-100">
      {/* Glass overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      <div className="relative z-10 p-10 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="relative inline-block">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-40 h-40 rounded-full border-8 border-white shadow-2xl ring-4 ring-blue-500/20"
          />
          <div className="absolute inset-0 rounded-full ring-4 ring-blue-500 animate-ping opacity-75"></div>
        </div>

        <h3 className="mt-8 text-3xl font-bold text-gray-800">{user.login}</h3>
        <p className="text-gray-500 text-sm mt-2">ID: {user.id}</p>
      </div>

      <div className="relative z-10 p-8 bg-gradient-to-t from-blue-50 via-blue-50/50 to-transparent border-t-4 border-blue-600">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}