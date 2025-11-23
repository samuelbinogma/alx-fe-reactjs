// src/components/UserList.jsx
import UserCard from './UserCard';

export default function UserList({ users }) {
  if (users.length === 0) {
    return (
      <div className="text-center py-32">
        <div className="text-6xl mb-6">Magnifying Glass Tilted Left</div>
        <p className="text-2xl text-gray-500 font-medium">No users found. Try a different search!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}