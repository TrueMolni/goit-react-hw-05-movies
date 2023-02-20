import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'components/Api';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    async function fetchMovieInfo() {
      if (!id) {
        return;
      }

      try {
        const response = await getMovieById(id);
        setMovie(response);
        console.log('by id:   ', response);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieInfo();
  }, [id]);

  // const {
  //   name,
  //   title,
  //   release_date,
  //   overview,
  //   vote_average,
  //   poster_path,
  //   backdrop_path,
  //   genres,
  //   original_title,
  // } = movie;

  return (
    <div>
      <button onClick={() => navigate(from)}>Go back</button>
      <MovieDetails
        name={movie?.name}
        title={movie?.title}
        release_date={movie?.release_date}
        overview={movie?.overview}
        vote_average={movie?.vote_average}
        poster_path={movie?.poster_path}
        backdrop_path={movie?.backdrop_path}
        genres={movie?.genres}
        original_title={movie?.original_title}
      />
      <ul>
        <Link to="cast" state={{ from }}>
          <p>Cast</p>
        </Link>
        <Link to="reviews" state={{ from }}>
          <p>Reviews</p>
        </Link>
        <Outlet context={id} />
      </ul>
    </div>
  );
};

export default MovieDetailsPage;
