import axios from 'axios';
import config from './config';

const fetchTrendingMovies = async () => {
  const url = `${config.BASE_URL}/trending/movie/week?api_key=${config.API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Fetch error:', error);
    return [];
  }
};

export default fetchTrendingMovies;
