import Api from '../axios/Api';

const API_URL = '/cars';

const getCars = async () => {
  try {
    const response = await Api.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch cars');
  }
};


const createCar = async (carData) => {
  try {
    const response = await Api.post(API_URL, carData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create Car');
  }
};

const updateCar = async (carId, carData) => {
  try {
    const response = await Api.patch(`${API_URL}/${carId}`, carData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update Car');
  }
};

const deleteCar = async (carId) => {
  try {
    await Api.delete(`${API_URL}/${carId}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete Car');
  }
};

export { getCars, updateCar, deleteCar, createCar };
