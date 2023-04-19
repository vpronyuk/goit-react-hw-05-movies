import axios from 'axios';
import config from './config';

const searchMovies = async query => {
  const url = `${config.BASE_URL}/search/movie?api_key=${config.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Fetch error:', error);
    return [];
  }
};

export default searchMovies;
