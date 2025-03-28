import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

// Create an instance of Axios with default configuration
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    const access = localStorage.getItem('access');
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error: AxiosError) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor with token refresh logic
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem('refresh');
        if (!refresh) {
          throw new Error('No refresh token available');
        }

        // Attempt to refresh the token
        const response = await api.post('/auth/refresh/', {
          refresh: refresh,
        });

        const { access } = response.data;
        localStorage.setItem('access', access);

        // Retry the original request with the new token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${access}`;
        }
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
