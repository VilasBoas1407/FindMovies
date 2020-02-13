import axios from 'axios';

const apiImg = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/',
});

export default apiImg;