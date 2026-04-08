import axios from 'axios';

// En desarrollo: http://localhost:5034/api
// En producción: /api (rutas relativas desde el servidor)
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5034/api' 
  : '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: (username, email, password) =>
    api.post('/auth/register', { username, email, password }),
  login: (username, password) =>
    api.post('/auth/login', { username, password }),
};

export const hotwheelsService = {
  getAll: () => api.get('/hotwheels'),
  getById: (id) => api.get(`/hotwheels/${id}`),
  create: (data) => api.post('/hotwheels', data),
  update: (id, data) => api.put(`/hotwheels/${id}`, data),
  delete: (id) => api.delete(`/hotwheels/${id}`),
};

export default api;
