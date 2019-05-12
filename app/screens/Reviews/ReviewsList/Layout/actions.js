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
    .ref('books')
    .once('value')
    .then(e => {
      const books = e.val();
      if (books) {
        firebase
          .database()
          .ref('reviews')
          .once('value')
          .then(snapshot => {
            let dataReviews = false;
            if (snapshot.val()) {
              dataReviews = Object.values(snapshot.val()).map(review => {
                const ratings = Object.values(books[review.bookId].rating);
                return {
                  ...review,
                  userRating:
                    ratings.reduce((sum, user) => (sum += user.rating), 0) /
                    ratings.length
                };
              });
            }
            dispatch({ type: LOAD_REVIEWS_SUCCESS, reviews: dataReviews });
          })
          .catch(error => {
            dispatch({ type: LOAD_REVIEWS_ERROR, error });
          });
      }
    })
    .catch(error => {
      dispatch({ type: LOAD_REVIEWS_ERROR, error });
    });
};
