import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('Starting Request');
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});

export default axios.create({
  baseURL: 'https://api.publicapis.org',
  headers: {
    'Content-type': 'application/json',
  },
});
