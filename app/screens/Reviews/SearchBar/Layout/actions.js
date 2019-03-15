import {
  LOAD_FILTERED_REVIEWS,
  LOAD_FILTERED_REVIEWS_SUCCESS,
  LOAD_FILTERED_REVIEWS_ERROR
} from './constants';
import firebase from 'firebase';

export const loadFilteredReviews = filters => dispatch => {
  dispatch({ type: LOAD_FILTERED_REVIEWS });
  firebase
    .database()
    .ref('reviews')
    .once('value')
    .then(snapshot => {
      dispatch({
        type: LOAD_FILTERED_REVIEWS_SUCCESS,
        reviews: snapshot.val()
      });
    })
    .catch(error => {
      dispatch({ type: LOAD_FILTERED_REVIEWS_ERROR, error });
    });
};
