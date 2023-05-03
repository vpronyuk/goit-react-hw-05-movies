import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './layout/Layout';

const Home = lazy(() => import('pages/home/Home'));
const Movies = lazy(() => import('pages/movies/Movies'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));

const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
