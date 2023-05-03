import { useState, useEffect } from 'react';
import * as API from 'services/api';
import css from './Home.module.css';

import MoviesList from 'components/movieList/MovieList';

// import { Container, Title, ErrorMessage, LoadingMessage } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const loadedMovies = await API.getTrendingMovies();
        setMovies(loadedMovies);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.title}>
        <h2>Trending Movies</h2>
        {/* <h2>Trending Movies</h2> */}
      </div>
      {loading && <div className={css.loadingMessage}>Loading...</div>}
      {error && <div className={css.errorMessage}>{error}</div>}
      {!loading && !error && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
