import axios from 'axios';

export default function api() {
  axios.create({
    baseURL: 'http://localhost:3333',
  });
}
