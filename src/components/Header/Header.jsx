// import { useState } from 'react';
// import { Routes, Route, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
import {
  SearchHeader,
  StyledNav,
  StyledNavLink,
  NavigationList,
} from './Header.styled';
import items from '../../items';

const Header = () => {
  const elements = items.map(({ id, text, link }) => {
    return (
      <li key={id}>
        <StyledNavLink to={link}>{text}</StyledNavLink>
      </li>
    );
  });

  return (
    <SearchHeader>
      <StyledNav>
        <NavigationList>{elements}</NavigationList>
      </StyledNav>
    </SearchHeader>
  );
};

export default Header;

// <Route path="/movies" element={<Movies />} />
