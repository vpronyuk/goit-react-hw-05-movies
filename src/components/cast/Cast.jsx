import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../services/api';
import css from './Cast.module.css';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [isCastLoaded, setIsCastLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadCastInfo(movieId) {
      try {
        const response = await API.getMovieCast(movieId);
        setCastInfo(response);
        setIsCastLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadCastInfo(movieId);
  }, [movieId]);

  if (castInfo.length === 0 && isCastLoaded) {
    return <h2>No cast information for this movie</h2>;
  }

  return (
    <div>
      <h2>Movie Cast</h2>
      <ul className={css.castList}>
        {castInfo.map(({ id, profile_path, name, character }) => (
          <li key={id} className={css.castListItem}>
            {profile_path ? (
              <img
                className={css.castPoster}
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={name}
              />
            ) : (
              <img
                className={css.castPoster}
                src={`https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg`}
                alt={name}
              />
            )}
            <div>
              <h2 className={css.castTitle}>{name}</h2>
              <p className={css.castCharacter}>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
