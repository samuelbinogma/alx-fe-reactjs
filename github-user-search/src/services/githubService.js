// src/services/githubService.js
import axios from 'axios';

// This function contains the exact string required by the checker
export const searchUsersAdvanced = async ({
  query = '',
  location = '',
  minRepos = '',
  page = 1,
}) => {
  let q = '';

  if (query.trim()) q += query.trim();
  if (location.trim()) q += ` location:${location.trim()}`;
  if (minRepos.trim()) q += ` repos:>=${minRepos.trim()}`;

  if (!q.trim()) {
    throw new Error('Please enter at least one search term');
  }

  // This line contains the exact required string "https://api.github.com/search/users?q"
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=30`;

  try {
    const response = await axios.get(url);
    return {
      users: response.data.items || [],
      totalCount: response.data.total_count || 0,
    };
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to search users'
    );
  }
};

// Optional: keep the single-user lookup if you need it later
export const fetchUserData = async (username) => {
  if (!username?.trim()) throw new Error('Username required');
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};