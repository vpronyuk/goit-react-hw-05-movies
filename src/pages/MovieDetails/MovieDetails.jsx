import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import * as API from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

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
    <div>
      {movieInfo && (
        <>
          <div>Movie Details page</div>
          <Link to={backLink}>Go back</Link>
          {movieInfo.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w780${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
          ) : (
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg`}
              alt={movieInfo.title}
            />
          )}
          {movieInfo.title} ({movieInfo.release_date?.slice(0, 4)}) User Score:
          &nbsp; // {Math.round(movieInfo.vote_average * 10)}%
          <div>Overview</div>
          <div>{movieInfo.overview}</div>
          {movieInfo.genres && (
            <>
              <h3>Genres:</h3>
              <ul>
                {movieInfo.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </>
          )}
          <div>Additional information</div>
          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
