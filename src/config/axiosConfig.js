import axios from 'axios';

const axiosConfig = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000,
};
const ax = axios.create(axiosConfig);
export default ax;
