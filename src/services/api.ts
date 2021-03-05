import axios from 'axios';

const Cors = 'https://cors-anywhere.herokuapp.com/';

const api = axios.create({
  baseURL: `${Cors}https://jobs.github.com/`,
});

export default api;
