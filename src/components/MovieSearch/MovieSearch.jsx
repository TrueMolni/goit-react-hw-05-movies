import PropTypes from 'prop-types';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import Notiflix from 'notiflix';

import {
  SearchBtn,
  SearchBtnLabel,
  SearchForm,
  SearchInput,
} from './MovieSearch.styled';

// import { getMovies, getAllMovies, getMovieById } from 'components/Api/Api';

const MovieSearch = ({ submitPropValue }) => {
  const [query, setQuery] = useState('');

  Notiflix.Notify.init({
    position: 'right-top',
    clickToClose: 'true',
  });

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const resetQuerry = () => {
    setQuery('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return Notiflix.Notify.warning('Please enter your query');
    }

    submitPropValue(query);
    resetQuerry();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBtn type="submit">
        <FcSearch style={{ width: 22, height: 22 }} />
        <SearchBtnLabel>Search</SearchBtnLabel>
      </SearchBtn>
      <SearchInput
        onChange={handleChange}
        type="text"
        name="query"
        value={query}
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        reguired
      />
    </SearchForm>
  );
};

export default MovieSearch;

MovieSearch.propType = {
  onSubmit: PropTypes.func.isRequired,
};
