import * as API from 'services/api';
import { useState, useEffect } from 'react';
import MoviesList from 'components/movieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const loadedMovies = await API.getTrendingMovies();
        setMovies(loadedMovies);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadMovies();
  }, []);

  return (
    <div>
      <div>This is a Home page!!</div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
