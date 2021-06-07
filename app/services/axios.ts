import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://60be2ecb8a571b00176e85fa.mockapi.io',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
