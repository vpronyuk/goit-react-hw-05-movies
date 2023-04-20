import axios from 'axios';
import config from './config';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/trending/movie/week?api_key=${config.API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log('Fetch error:', error);
    return [];
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/search/movie?api_key=${config.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.log('Fetch error:', error);
    return [];
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/movie/${movieId}?api_key=${config.API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log('Fetch error:', error);
    return null;
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/movie/${movieId}/credits?api_key=${config.API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log('Fetch error:', error);
    return null;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/movie/${movieId}/reviews?api_key=${config.API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log('Fetch error:', error);
    return null;
  }
};
