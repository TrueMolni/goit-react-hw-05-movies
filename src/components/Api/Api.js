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

export const getMovies = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  return data;
};

export const getAllMovies = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export const getTrending = async () => {
  const { data } = await instance.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  );
  console.log(data);
  return data.results;
};

// export const getCommentByPostId = async id => {
//   const { data } = await instance.get(`/${id}/comments`);
//   return data;
// };
