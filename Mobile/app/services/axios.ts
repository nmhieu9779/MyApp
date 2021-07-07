import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.39:3001',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
