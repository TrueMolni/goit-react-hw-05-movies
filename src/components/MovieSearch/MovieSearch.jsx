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

const MovieSearch = ({ myPropOnSubmit }) => {
  const [query, setQuery] = useState('');

  const options = {
    position: 'right-top',
    clickToClose: true,
  };
  Notiflix.Notify.init(options);

  const handleChange = ({ target }) => {
    setQuery(target.value.toLowerCase());
  };

  const resetQuerry = () => {
    setQuery('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim().length < 1) {
      return Notiflix.Notify.failure('Enter more than 1 character');
    }
    myPropOnSubmit(query);
    resetQuerry();
  };

  return (
    <SearchForm myPropOnSubmit={handleSubmit}>
      <SearchBtn type="submit">
        <FcSearch style={{ width: 22, height: 22 }} />
        <SearchBtnLabel>Search</SearchBtnLabel>
      </SearchBtn>
      <SearchInput
        onChange={handleChange}
        type="text"
        name="query"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        required
      />
    </SearchForm>
  );
};

export default MovieSearch;

MovieSearch.propType = {
  myPropOnSubmit: PropTypes.func.isRequired,
};
