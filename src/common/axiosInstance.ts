import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_ENDPOINT_URL || 'http://localhost:4000/api/v1',
  timeout: 10000,
  withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    // Do something before request is sent
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error.response.data);
  },
);

export default instance;
