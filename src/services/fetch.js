import axios from 'axios';

const fetchMovies = async () => {
  const params = {
    BASE_URL: 'https://api.themoviedb.org/3',
    userQuery: 'movie/76341?',
    API_KEY: 'd95cade1dc5c92803fa23ff687afbf7e',
  };

  try {
    const response = await axios.get({ params });
    return response.data;
  } catch (error) {
    console.log('Fetch aborted');
  }
};

export default fetchMovies;
