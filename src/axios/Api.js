import axios from 'axios'
export default axios.create({
baseURL:"http://localhost:3001/api/v0",
withCredentials: true,
})