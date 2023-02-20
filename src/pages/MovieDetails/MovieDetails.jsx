import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'components/Api/Api';

const MovieDetails = () => {
  getMovieById();

  return (
    <div>
      <img src="" alt="" />
      <div>
        <h2>Movie Details</h2>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>
          {/* {genres &&
            genres.map(({ id, name }) => (
              <GenresList key={id}>{name},</GenresList>
            ))} */}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
