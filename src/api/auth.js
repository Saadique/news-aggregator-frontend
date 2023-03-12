import axios from './axios';

const getCurrentUser = () => {
    return axios.get('/auth/user-profile')
};

const register = (data) => {
    console.log(data);
    return axios.post('/auth/register', {
        full_name: data.name,
        email: data.email,
        password: data.password
    })
};

const login = (email, password) => {
    return axios.post('/auth/login', {
        email: email,
        password: password
    })
};

export default {
    register: register,
    getCurrentUser: getCurrentUser,
    login: login
};