import Api from '../axios/Api';

const API_URL = '/users';

const getUsers = async () => {
  try {
    const response = await Api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch users');
  }
};

const getUser = async (id) => {
  try {
    const response = await Api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user');
  }
};

const createUser = async (userData) => {
  try {
    const response = await Api.post(API_URL, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create user');
  }
};

const updateUser = async (userId, userData) => {
  try {
    const response = await Api.put(`${API_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update user');
  }
};

const deleteUser = async (userId) => {
  try {
    await Api.delete(`${API_URL}/${userId}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete user');
  }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
