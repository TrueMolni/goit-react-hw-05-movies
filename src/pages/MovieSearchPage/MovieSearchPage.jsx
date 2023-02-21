import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Notiflix from 'notiflix';
import { searchMovies } from '../../Api';
import MovieSearch from '../../components/MovieSearch';
import {
  MovieUl,
  PosterTitle,
  FilmPoster,
  MovieItem,
} from '../../components/MovieList/MovieList.styled';

const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const IMG = 'https://image.tmdb.org/t/p/w500';

  const query = searchParams.get('query');
  const page = searchParams.get('page');

  useEffect(() => {
    if (query === null) {
      return;
    }
    const fetchMovieByKeyWord = async query => {
      try {
        const response = await searchMovies(query);
        setMovies(response);
        if (response.length === 0) {
          return Notiflix.Notify.failure('Nothing found');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMovieByKeyWord(query);
  }, [query, page, setMovies]);

  const handleFormSubmit = useCallback(
    query => {
      setSearchParams({ query, page: 1 });
      setMovies([]);
    },
    [setSearchParams]
  );

  const loadMore = useCallback(() => {
    setSearchParams({ query, page: Number(page) + 1 });
  }, [query, page, setSearchParams]);

  return (
    <>
      <MovieSearch myPropOnSubmit={handleFormSubmit} />

      <MovieUl>
        {movies?.map(({ name, original_title, id, poster_path }) => {
          return (
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              <MovieItem>
                <FilmPoster src={`${IMG}/${poster_path}`} alt={name} />
                <PosterTitle>{original_title || name}</PosterTitle>
              </MovieItem>
            </Link>
          );
        })}
      </MovieUl>

      {movies.length > 0 && <button onClick={loadMore}>Load more</button>}
    </>
  );
};
export default MovieSearchPage;
