// src/components/Search.jsx
import { useState } from 'react';
import { searchUsersAdvanced } from '../services/githubService.js';
import UserList from './UserList';
import LoadingSpinner from './LoadingSpinner';

export default function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1);
    setUsers([]);
    setError('');
    setLoading(true);

    try {
      const result = await searchUsersAdvanced({ query, location, minRepos, page: 1 });
      setUsers(result.users);
      setTotalCount(result.totalCount);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const result = await searchUsersAdvanced({ query, location, minRepos, page: page + 1 });
      setUsers(prev => [...prev, ...result.users]);
      setPage(prev => prev + 1);
    } catch {
      setError('Failed to load more users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Advanced Search Form */}
      <form onSubmit={handleSearch} className="max-w-5xl mx-auto mb-20">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <input
              type="text"
              placeholder="Username"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-8 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Location (e.g. Berlin)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-8 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
            />
            <input
              type="number"
              placeholder="Min Repos (e.g. 500)"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="px-8 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition"
            />
          </div>
          <div className="text-center mt-10">
            <button
              type="submit"
              disabled={loading}
              className="px-20 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-2xl rounded-2xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all shadow-2xl"
            >
              {loading ? 'Searching...' : 'Search GitHub Users'}
            </button>
          </div>
        </div>
      </form>

      {/* States */}
      {error && (
        <div className="text-center py-16">
          <p className="text-2xl text-red-600 font-semibold bg-red-50 py-6 px-10 rounded-2xl inline-block">{error}</p>
        </div>
      )}

      {loading && !users.length && <LoadingSpinner />}

      {users.length > 0 && (
        <>
          <div className="text-center mb-16">
            <p className="text-3xl font-bold text-gray-800">
              Found <span className="text-blue-600">{totalCount.toLocaleString()}</span> users
            </p>
          </div>

          <UserList users={users} />

          {users.length < totalCount && (
            <div className="text-center mt-20">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-20 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-2xl rounded-2xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all shadow-2xl"
              >
                {loading ? 'Loading More...' : 'Load More Users'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}