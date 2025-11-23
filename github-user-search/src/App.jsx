import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/Search'
import UserCard from './components/UserCard'
import UserList from './components/UserList'
import LoadingSpinner from './components/LoadingSpinner'
import { fetchUserData } from './services/githubService'
import './App.css'

function App() {
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
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message || 'Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
      <header>
        <h1>GitHub User Lookup</h1>
        <p>Enter a GitHub username to view their profile</p>
      </header>

      <main>
        {/* Search Form */}
        <form onSubmit={handleSubmit}>
          <div className="search-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. mojombo, defunkt, torvalds"
              autoFocus
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="error">
            {error}
          </div>
        )}

        {/* Success: User Found */}
        {user && !loading && !error && (
          <div className="user-card single">
            <img src={user.avatar_url} alt={user.login} />
            <div className="user-info">
              <h2>{user.name || user.login}</h2>
              <p className="login">@{user.login}</p>
              {user.bio && <p className="bio">{user.bio}</p>}
              <div className="details">
                {user.location && <p>Location: {user.location}</p>}
                {user.company && <p>Company: {user.company}</p>}
                <p>Public Repos: {user.public_repos}</p>
                <p>Followers: {user.followers} | Following: {user.following}</p>
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>React + GitHub API</p>
      </footer>
    </div>
    </>
  )
}

export default App
