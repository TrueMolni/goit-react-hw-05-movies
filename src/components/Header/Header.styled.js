import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SearchHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #e89642;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNavLink = styled(NavLink)`
  list-style: none;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  margin: 0 8px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: 0.2s;
    border-radius: 25px;
  }
  &:hover {
    &::before {
      background: linear-gradient(to bottom, #e8edec, #d2d1d3);
      box-shadow: 0px 3px 20px 0px black;
      transform: scale(1.2);
    }
    color: black;
  }
`;

// export const StyledNavLink = styled(NavLink)`
//   a {
//     color: #797878;
//     margin: 0 20px;
//     padding: 10px;
//     position: relative;
//     overflow: hidden;
//     display: inline-block;
//     @include transition(0.3s ease-out 0.3s);
// span {
//   &::before {
//     width: 100%;
//     height: 2px;
//     background: white;
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     @include translateX(-100%);
//     @include transition(0.3s);
//   }
//   &::after {
//     width: 100%;
//     height: 2px;
//     background: white;
//     content: '';
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     @include translateX(100%);
//     @include transition(0.3s);
//   }
// }
// &::before {
//   width: 2px;
//   height: 100%;
//   background: white;
//   content: '';
//   position: absolute;
//   left: 0;
//   top: 0;
//   @include translateY(100%);
//   @include transition(0.3s);
// }
// &::after {
//   width: 2px;
//   height: 100%;
//   background: white;
//   content: '';
//   position: absolute;
//   right: 0px;
//   bottom: 0;
//   @include translateY(-100%);
//   @include transition(0.3s);
// }
// &:hover {
//   color: white;
//   &::before,
//   &::after {
//     @include translateX(0);
//   }
//   span {
//     &::before,
//     &::after {
//       @include translateX(0);
//     }
//   }
// }
//   }
// `;

export const StyledNav = styled.nav`
  display: flex;
`;

export const NavigationList = styled.ul`
  display: inherit;
  list-style: none;
`;
