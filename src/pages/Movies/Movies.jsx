import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from 'services/api';

import MovieList from 'components/movieList/MovieList';
import SearchForm from 'components/searchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        try {
          const data = await API.getSearchedMovies(query);
          setSearchParams('');
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = query => {
    setQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div>
      <h2>Movies</h2>
      <SearchForm onSubmit={handleSubmit} query={query} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
