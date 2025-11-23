import axios from 'axios';

const API_BASE = 'https://api.github.com';

// Named export exactly as required: fetchUserData
export const fetchUserData = async (username) => {
  if (!username.trim()) {
    throw new Error('Username is required');
  }

  try {
    const response = await axios.get(`${API_BASE}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Looks like we cant find the user');
    }
    throw new Error('Something went wrong. Please try again.');
  }
};