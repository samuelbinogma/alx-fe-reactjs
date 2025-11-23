import UserCard from './UserCard';

export default function UserList({ users }) {
  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>No users found. Try searching for someone!</p>
      </div>
    );
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}