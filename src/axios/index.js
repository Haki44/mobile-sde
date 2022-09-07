import axios from "axios";
// import store from "../store";
import auth from "../store/auth";

const axiosClient = axios.create({
  // baseURL: 'https://haki44.eu/api'
  baseURL: 'http://sde-api/api'
})

axiosClient.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${auth.state.user.token}`
  return config;
})

export default axiosClient;