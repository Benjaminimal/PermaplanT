import axios from 'axios';
import { baseApiUrl } from '../config/index';
import { setupInterceptor } from './axiosInterceptor';

const axiosInstance = axios.create({
  baseURL: baseApiUrl,
});

setupInterceptor(axiosInstance);

export default axiosInstance;
