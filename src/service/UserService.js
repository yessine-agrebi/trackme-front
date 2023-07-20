import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v0/users';

const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch users');
  }
};

const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create user');
  }
};

const updateUser = async (userId, userData) => {
  try {
    const response = await axios.patch(`${API_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update user');
  }
};

const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_URL}/${userId}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete user');
  }
};

export { getUsers, createUser, updateUser, deleteUser };
