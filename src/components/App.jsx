import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Header from './Header';
const HomePage = lazy(() => import('../pages/HomePage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const MovieSearchPage = lazy(() => import('../pages/MovieSearchPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));

const App = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MovieSearchPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

/* 
'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
/movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
/movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
*/
