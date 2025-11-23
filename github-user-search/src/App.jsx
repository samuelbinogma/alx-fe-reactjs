import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchForm from './components/SearchForm'
import UserCard from './components/UserCard'
import UserList from './components/UserList'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (searchResults) => {
    setUsers(searchResults);
    setError(null);
  };

  const handleError = (err) => {
    setError('Failed to search users. Please check your connection and try again.');
    setUsers([]);
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <>
    <div className="App">
      <header>
        <h1>GitHub User Search</h1>
        <p>Find any GitHub user instantly by username</p>
      </header>

      {/* Main Content */}
      <main>
        <SearchForm
          onSearch={handleSearch}
          onError={handleError}
          onLoading={handleLoading}
        />

        {/* Loading State */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Searching GitHub users...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="error">
            {error}
          </div>
        )}

        {/* Results */}
        {!loading && <UserList users={users} />}
      </main>

      {/* Footer */}
      <footer>
        <p>
          Built with React + Vite and GitHub API 
        </p>
      </footer>
    </div>
    </>
  )
}

export default App
