const BASE_URL = 'https://threads-clone-backend-ett3.onrender.com';

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