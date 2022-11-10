// https://api.themoviedb.org/3/movie/550?api_key=126c98610b953996e384874a869a831e

import axios from 'axios';

const KEY = '126c98610b953996e384874a869a831e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularFilms = () => {
  const response = axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
  return response;
};

export const fetchFilmsByRequest = id => {
  const response = axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
  return response;
};
