import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = 'http://127.0.0.1:8000/api';

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.post['Accept'] = 'application/json';

axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.put['Accept'] = 'application/json';

axiosInstance.interceptors.request.use(function (config) {
    const access_token = localStorage.getItem('access_token');
    access_token ? config.headers.Authorization = "Bearer " + access_token : config.headers.Authorization = undefined;
    return config;
});

export default axiosInstance;