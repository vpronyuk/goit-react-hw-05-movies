import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

import * as API from '../../services/api';

import MovieList from 'components/movieList/MovieList';
import SearchForm from 'components/searchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

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
  }, [query, setSearchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div className={css.container}>
      <div className={css.title}>Search Your Movies here..</div>
      <SearchForm onSubmit={handleSubmit} query={query} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
