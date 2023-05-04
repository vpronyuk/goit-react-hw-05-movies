import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

import * as API from '../../services/api';
import css from 'components/reviews/Reviews.module.css';

const Reviews = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  // const [isReviewInfoLoaded, setIsReviewInfoLoaded] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadReviewInfo(movieId) {
      try {
        const reviewResponse = await API.getMovieReviews(movieId);
        setReviewInfo(reviewResponse);
        // setIsReviewInfoLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    loadReviewInfo(movieId);
  }, [movieId]);

  // if (reviewInfo.length === 0 && isReviewInfoLoaded) {
  //   return <h2>No reviews for this movie</h2>;
  // }

  return (
    <div>
      <ul className={css.reviewList}>
        {reviewInfo.map(({ id, author, content }) => (
          <li key={id} className={css.review}>
            <h3 className={css.author}>Author: {author}</h3>
            {content ? (
              <p className={css.content}>{content}</p>
            ) : (
              <p>We don't have any reviews for this movie</p>
            )}
            {/* <p className={css.content}>{content}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

// Reviews.propTypes = {
//   // reviewInfo: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id: PropTypes.number.isRequired,
//   //     author: PropTypes.string.isRequired,
//   //     content: PropTypes.string.isRequired,
//   //   })
//   // ),
// };
