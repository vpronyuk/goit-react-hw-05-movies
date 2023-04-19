import axios from 'axios';
import config from './config';

const fetchMovieCredits = async movieId => {
  const url = `${config.BASE_URL}/movie/${movieId}/credits?api_key=${config.API_KEY}&language=en-US`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Fetch error:', error);
    return null;
  }
};

export default fetchMovieCredits;
