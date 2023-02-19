import styled from '@emotion/styled';

export const MovieUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 30px;
`;

export const PosterTitle = styled.p`
  font-weight: bold;
  color: #25468e;
  margin-bottom: 15px;
  text-align: center;
`;

export const FilmPoster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  width: 280px;
  height: 400px;
  margin-left: 35px;
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
`;

export const MovieItem = styled.li`
  text-decoration: none;
  list-style: none;
`;
