// import { Outlet } from 'react-router-dom';
// import Header from 'components/Header';
// import { getTrending } from 'components/Api/Api';
import MovieList from 'components/MovieList';
// getTrending();

const HomePage = () => {
  return (
    <>
      <h1>In trend now</h1>
      <MovieList />
    </>
  );
};

export default HomePage;
