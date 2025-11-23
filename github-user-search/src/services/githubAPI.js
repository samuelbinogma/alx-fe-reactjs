import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

// Named exports — these are what we import
export const searchUsers = async (query) => {
  if (!query.trim()) return [];

  try {
    const response = await axios.get(`${API_BASE_URL}/search/users`, {
      params: {
        q: query,
        per_page: 20,
      },
    });
    return response.data.items || [];
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};