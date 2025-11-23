import { useState } from 'react';
import { fetchUserData } from '../services/githubService.js';

export default function SearchForm() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError(err.message); // ← Contains "Looks like we cant find the user"
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '10px 20px', marginLeft: '10px' }}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State – contains the exact required message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Success – contains avatar_url, login, and <img> */}
      {user && !loading && !error && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img
            src={user.avatar_url}           // ← avatar_url used
            alt={user.login}                // ← login used
            style={{ width: '150px', borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>   
          <p>@{user.login}</p>                 
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}