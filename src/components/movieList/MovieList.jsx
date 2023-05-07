import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImage =
    'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title, release_date, poster_path }) => (
        <li key={id} className={css.movieListItem}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.movieListItemLink}
          >
            <img
              className={css.moviePoster}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : defaultImage
              }
              alt={title}
            />
            <h2 className={css.movieTitle}>{title}</h2>
            <p className={css.movieReleaseDate}>Release date: {release_date}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
