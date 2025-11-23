import { useState } from 'react';
import { searchUsers } from '../services/githubAPI.js';

export default function SearchForm({ onSearch, onError, onLoading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    onLoading(true);
    try {
      const results = await searchUsers(query);
      onSearch(results);
    } catch (err) {
      onError(err);
    } finally {
      onLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users (e.g. gaearon, torvalds)"
          autoFocus
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}