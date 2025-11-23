// src/services/githubService.js
import axios from 'axios';

export const searchUsersAdvanced = async ({
  query = '',
  location = '',
  minRepos = '',
  page = 1
}) => {
  let q = '';
  if (query) q += query.trim();
  if (location) q += ` location:${location.trim()}`;
  if (minRepos) q += ` repos:>=${minRepos}`;

  if (!q.trim()) throw new Error('Please enter at least one search criterion');

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=30`;

  try {
    const response = await axios.get(url);
    return {
      users: response.data.items || [],
      totalCount: response.data.total_count || 0
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to search users');
  }
};