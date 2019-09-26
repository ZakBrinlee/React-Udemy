import axios from 'axios';

//Key is from dummy account, security is not a issue
const KEY = 'AIzaSyDw8MVH47aV4GnX8yRwHfRrY7cDFbXcUHA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});