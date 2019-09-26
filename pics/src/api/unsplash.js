import axios from 'axios';

// creating a custom instance of axios
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 17b664efc6d7000313425d5dd3ad8598af7bd451be4cf21c3aae9aad5f380fcc'
  }
});