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
      dispatch({ type: LOAD_REVIEWS_SUCCESS, reviews: snapshot.val() });
    })
    .catch(error => {
      dispatch({ type: LOAD_REVIEWS_ERROR, error });
    });
};
