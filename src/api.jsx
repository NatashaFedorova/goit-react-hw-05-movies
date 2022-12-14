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

export const fetchMoviesByTitle = value => {
  const response = axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${value}`
  );
  return response;
};

export const fetchCastByRequest = id => {
  const response = axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`);
  return response;
};

export const fetchReviewsByRequest = id => {
  const response = axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`);
  return response;
};
