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


export {Login}