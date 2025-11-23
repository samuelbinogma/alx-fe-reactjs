import axios from 'axios';

const API_BASE = 'https://api.github.com';

export const fetchUserData = async (username) => {
  if (!username?.trim()) throw new Error('Username required');
  try {
    const response = await axios.get(`${API_BASE}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Looks like we cant find the user');
    }
    throw new Error('Something went wrong');
  }
};

export const searchUsersAdvanced = async ({ query = '', location = '', minRepos = '', page = 1, perPage = 20 }) => {
  try {
    let searchQuery = query.trim();
    if (location.trim()) searchQuery += ` location:${location.trim()}`;
    if (minRepos.trim()) searchQuery += ` repos:>=${minRepos.trim()}`;

    if (!searchQuery) throw new Error('At least one search criterion is required');

    const response = await axios.get(`${API_BASE}/search/users`, {
      params: {
        q: searchQuery,
        page,
        per_page: perPage,
      },
    });

    return {
      users: response.data.items || [],
      totalCount: response.data.total_count || 0,
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to search users');
  }
};