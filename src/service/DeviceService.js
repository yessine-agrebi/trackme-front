import Api from '../axios/Api';

const API_URL = '/devices';

const getDevices = async () => {
  try {
    const response = await Api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch devices');
  }
};

const getPosition = async (id) => {
  try {
    const response = await Api.get(`${API_URL}/${id}/position`);
    const location = response.data[0];
    return location
  } catch (error) {
    console.error(error.message);
  }
};
const getStatus = async (id) => {
  try {
    const response = await Api.get(`${API_URL}/${id}/status`);
    const status = response.data;
    return status
  } catch (error) {
    console.error(error.message);
  }
};

const createDevice = async (deviceData) => {
  try {
    const response = await Api.post(API_URL, deviceData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create Device');
  }
};

const updateDevice = async (deviceId, deviceData) => {
  try {
    const response = await Api.patch(`${API_URL}/${deviceId}`, deviceData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update user');
  }
};

const deleteDevice = async (deviceId) => {
  try {
    await Api.delete(`${API_URL}/${deviceId}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete user');
  }
};

export { getDevices, createDevice, updateDevice, deleteDevice, getPosition, getStatus };
