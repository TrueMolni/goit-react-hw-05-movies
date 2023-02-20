import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'components/Api';

import {
  MovieUl,
  PosterTitle,
  FilmPoster,
  MovieItem,
} from './MovieList.styled';

const MovieList = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await getTrending();
        setMovies(response);
        console.log('response', response);
      } catch (response) {
        console.log('error', response.data.message);
      }
    }
    fetchMovies();
  }, []);

  return (
    <MovieUl>
      {movies?.map(({ name, original_title, id, poster_path }) => {
        return (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem>
              <FilmPoster
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={name}
              />
              <PosterTitle>{original_title || name}</PosterTitle>
            </MovieItem>
          </Link>
        );
      })}
    </MovieUl>
  );
};

export default MovieList;
