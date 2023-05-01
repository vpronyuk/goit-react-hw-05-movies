import * as API from 'services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/movieList/MovieList';
import SearchForm from 'components/searchForm/SearchForm';

const Movies = () => {
  const [requestedMovies, setRequestedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    if (!movieId) return;

    async function loadSearchedMovies(movieId) {
      setIsLoaded(true);
      try {
        const receivedSearchedMovies = await API.getSearchedMovies(movieId);
        if (!receivedSearchedMovies.total_results) {
          throw new Error('No data from server!');
        }
        setRequestedMovies(receivedSearchedMovies);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoaded(false);
      }
    }
    if (searchQuery.trim() !== '') {
      loadSearchedMovies(movieId);
    }
  }, [movieId]);

  const onSubmit = inputValue => {
    if (!inputValue) {
      setSearchParams({});
      setRequestedMovies([]);
    } else {
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      <SearchForm onSubmit={onSubmit} movieId={movieId} />

      <MovieList movies={requestedMovies} />
    </div>
  );
};

export default Movies;
