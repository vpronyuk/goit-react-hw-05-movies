import { useState, useEffect } from 'react';
import * as API from 'services/api';

import MoviesList from 'components/movieList/MovieList';

import { Container, Title, ErrorMessage, LoadingMessage } from './Home.styled';

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
    <Container>
      <Title>Trending Movies of the Week</Title>
      {loading && <LoadingMessage>Loading...</LoadingMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && <MoviesList movies={movies} />}
    </Container>
  );
};

export default Home;
