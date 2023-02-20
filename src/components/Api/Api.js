import axios from 'axios';

const API_KEY = '623333e2eba93b003942355e59320afc';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const API_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

axios.defaults.baseURL = BASE_URL;

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}?api_key=${API_KEY}`);

  return data;
};

export const getTrending = async () => {
  const { data } = await instance.get(`/trending/all/week?api_key=${API_KEY}`);
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await instance.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(
    `/movie/${id}/credits?api_key=${API_KEY}`
  );

  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(
    `/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return data;
};
