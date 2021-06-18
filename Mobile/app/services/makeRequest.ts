import {AxiosRequestConfig} from 'axios';
import axios from './axios';

const makeRequest = async (config: AxiosRequestConfig) => {
  const response = await axios(config);
  return response;
};

export {makeRequest};
