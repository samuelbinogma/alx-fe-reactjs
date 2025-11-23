export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h3>{user.login}</h3>
        <p>User ID: {user.id}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile →
        </a>
      </div>
    </div>
  );
}