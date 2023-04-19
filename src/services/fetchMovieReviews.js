import axios from 'axios';
import config from './config';

const fetchMovieReviews = async movieId => {
  const url = `${config.BASE_URL}/movie/${movieId}/reviews?api_key=${config.API_KEY}&language=en-US&page=1`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Fetch error:', error);
    return null;
  }
};

export default fetchMovieReviews;
