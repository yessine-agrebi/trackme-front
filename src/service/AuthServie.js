import Api from "../axios/Api";

const API_URL = '/auth/login'

const Login = async (data) => {
    try {
      const response = await Api.post(API_URL, data);
      localStorage.setItem("token", response.data.token)
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
};

const Logout = async () => {
  try {
    // Make a POST request to the logout API
    const response = await Api.post('/auth/logout');
    
    // Clear the token from localStorage
    localStorage.removeItem("token");
    
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


export {Login, Logout}