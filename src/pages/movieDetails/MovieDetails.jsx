import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import css from './MovieDetails.module.css';

import * as API from '../../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { state } = useLocation();
  const backLink = useRef(state?.from ?? '/movies');
  const [movieInfo, setMovieInfo] = useState({});

  const defaultImage =
    'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';

  useEffect(() => {
    async function loadMovieById(movieId) {
      try {
        const movieResponse = await API.getMovieDetails(movieId);
        setMovieInfo(movieResponse);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadMovieById(movieId);
  }, [movieId]);

  return (
    <div className={css.detailsContainer}>
      {movieInfo && (
        <>
          <div className={css.title}>Movie Details page</div>
          <Link className={css.backLink} to={backLink.current}>
            Go back
          </Link>

          <img
            className={css.poster}
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w780${movieInfo.poster_path}`
                : defaultImage
            }
            alt={movieInfo.title}
          />

          <div className={css.title}>
            {movieInfo.title} ({movieInfo.release_date?.slice(0, 4)})
          </div>
          <div className={css.userScore}>
            User Score: &nbsp; {Math.round(movieInfo.vote_average * 10)}%
          </div>

          <div className={css.overviewTitle}>Overview</div>
          <div className={css.overview}>{movieInfo.overview}</div>
          {movieInfo.genres && (
            <>
              <div className={css.genresTitle}>Genres:</div>
              <ul className={css.genresList}>
                {movieInfo.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
          <div className={css.additionalInfoTitle}>Additional information</div>
          <div className={css.additionalInfoLinks}>
            <Link className={css.additionalInfoLink} to={`cast`}>
              Cast
            </Link>
            <Link className={css.additionalInfoLink} to={`reviews`}>
              Reviews
            </Link>
          </div>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
