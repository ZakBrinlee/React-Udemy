import axios from 'axios';

// creating a custom instance of axios
// unsplash was made with a test email account - client key is not needing to be secure
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 17b664efc6d7000313425d5dd3ad8598af7bd451be4cf21c3aae9aad5f380fcc'
  }
});