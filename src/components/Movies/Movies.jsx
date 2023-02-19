// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';
import {
  SearchBtn,
  SearchBtnLabel,
  SearchForm,
  SearchInput,
} from './Movies.styled';
import { getTrending } from 'components/Api/Api';

// import { getMovies, getAllMovies, getMovieById } from 'components/Api/Api';

const Movies = () => {
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
    <SearchForm>
      <SearchBtn type="submit">
        <FcSearch style={{ width: 22, height: 22 }} />
        <SearchBtnLabel>Search</SearchBtnLabel>
      </SearchBtn>
      <SearchInput
        //   onChange={handleChange}
        type="text"
        name="search"
        //   value={search}
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        reguired
      />
    </SearchForm>
  );
};

export default Movies;
