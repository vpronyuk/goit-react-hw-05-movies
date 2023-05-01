// // import PropTypes from 'prop-types';
// // import { Image } from '../movieListItem/MovieListItem.styled';

// // import { Item, StyledLinkMovie } from 'components/movieList/MovieList.styled';

// // const MovieListItem = ({ id, title, location, poster_path }) => {
// //   return (
// //     <Item>
// //       <StyledLinkMovie to={`/movies/${id}`} state={{ from: location }}>
// //         <Image
// //           src={`https://image.tmdb.org/t/p/w500${poster_path}`}
// //           alt={title}
// //         />
// //         {title}
// //       </StyledLinkMovie>
// //     </Item>
// //   );
// // };

// // MovieListItem.propTypes = {
// //   id: PropTypes.number.isRequired,
// //   title: PropTypes.string.isRequired,
// //   location: PropTypes.object.isRequired,
// // };

// // export default MovieListItem;

// import PropTypes from 'prop-types';

// const MovieListItem = ({ id, title, location, poster_path }) => {
//   return (
//     <div>
//       <a href={`/movies/${id}`} state={{ from: location }}>
//         <img
//           src={`https://image.tmdb.org/t/p/w500${poster_path}`}
//           alt={title}
//         />
//         <h3>{title}</h3>
//       </a>
//     </div>
//   );
// };

// MovieListItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   location: PropTypes.object.isRequired,
// };

// export default MovieListItem;
