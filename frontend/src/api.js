const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const apiFetch = (endpoint, options = {}) => {
  let url = endpoint;
  if (!/^https?:\/\//.test(endpoint)) {
    url = BASE_URL + (endpoint.startsWith('/') ? endpoint : '/' + endpoint);
  }
  return fetch(url, {
    credentials: 'include',
    ...options,
  });
}; 