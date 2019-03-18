import {
  LOAD_REVIEWS,
  LOAD_REVIEWS_SUCCESS,
  LOAD_REVIEWS_ERROR
} from './constants';
import firebase from 'firebase';

export const loadFilteredReviews = () => dispatch => {
  dispatch({ type: LOAD_REVIEWS });
  firebase
    .database()
    .ref('reviews')
    .once('value')
    .then(snapshot => {
      const dataReviews = snapshot.val();
      const discriptionLimit = 150;
      dataReviews.map(review => {
        const { discription } = review;
        if (discription.length > discriptionLimit) {
          const shortDiscr = discription.slice(0, discriptionLimit);
          review.discription = shortDiscr;
        }
        return review;
      });
      dispatch({ type: LOAD_REVIEWS_SUCCESS, reviews: dataReviews });
    })
    .catch(error => {
      dispatch({ type: LOAD_REVIEWS_ERROR, error });
    });
};
