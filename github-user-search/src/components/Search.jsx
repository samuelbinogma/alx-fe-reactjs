import { useState } from 'react';
import { searchUsersAdvanced } from '../services/githubService';

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
      const result = await searchUsersAdvanced({
        query,
        location,
        minRepos,
        page: 1,
      });
      setUsers(result.users);
      setTotalCount(result.totalCount);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const result = await searchUsersAdvanced({
        query,
        location,
        minRepos,
        page: page + 1,
      });
      setUsers(prev => [...prev, ...result.users]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError('Failed to load more');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Advanced Search Form */}
      <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg p-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Username (e.g. torvalds)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Location (e.g. Iceland)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Min Repos (e.g. 50)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            min="0"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition"
        >
          {loading ? 'Searching...' : 'Search GitHub Users'}
        </button>
      </form>

      {/* Results */}
      {error && <p className="text-red-600 text-center font-semibold bg-red-50 p-4 rounded-lg">{error}</p>}

      {users.length > 0 && (
        <>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Found <strong>{totalCount.toLocaleString()}</strong> user{totalCount !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map(user => (
              <div
                key={user.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-xl text-gray-800">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline text-sm block mt-2"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {users.length < totalCount && (
            <div className="text-center mt-10">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 disabled:bg-gray-400 transition"
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