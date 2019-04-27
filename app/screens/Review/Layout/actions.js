import {
  SAVE_REVIEW,
  SAVE_REVIEW_SUCCESS,
  SAVE_REVIEW_ERROR,
  PRELOAD_REVIEW,
  PRELOAD_REVIEW_SUCCESS,
  PRELOAD_REVIEW_ERROR,
  DELETE_REVIEW,
  DELETE_REVIEW_ERROR,
  DELETE_REVIEW_SUCCESS
} from './constants';
import firebase from 'firebase';
import Toast from 'react-native-root-toast';
import { loadFilteredReviews } from '../../Reviews/ReviewsList/Layout/actions';
import NavigationService from '../../../navigation/NavigationService';

export const deleteReview = (id, isEdit) => dispatch => {
  dispatch({ type: DELETE_REVIEW });
  const firebaseRef = firebase.database().ref();
  firebaseRef
    .child('reviews')
    .child(id)
    .remove()
    .then(() => {
      dispatch({ type: DELETE_REVIEW_SUCCESS });
      if (!isEdit) {
        Toast.show('Deleted', {
          position: 70
        });
        NavigationService.goBack();
        dispatch(loadFilteredReviews());
      }
    })
    .catch(err => {
      dispatch({ type: DELETE_REVIEW_ERROR, err });
    });
};

export const saveReview = review => async dispatch => {
  dispatch({ type: SAVE_REVIEW });
  dispatch(deleteReview(review.key, true));
  const firebaseRef = firebase.database().ref();
  const { bookId, authorId, authorRating, key } = review;
  await firebaseRef
    .child('books')
    .child(`${bookId}/rating/${authorId}`)
    .set({
      key: authorId,
      rating: authorRating
    });
  await firebaseRef
    .child('reviews')
    .child(key)
    .set(review)
    .then(() => {
      dispatch({ type: SAVE_REVIEW_SUCCESS });
      Toast.show('Saved', {
        position: 70,
        opacity: 1
      });
      dispatch(loadFilteredReviews());
      dispatch(preloadReview(key));
    })
    .catch(error => {
      dispatch({ type: SAVE_REVIEW_ERROR, error });
    });
};

export const preloadReview = id => async dispatch => {
  dispatch({ type: PRELOAD_REVIEW });
  let review = false;
  await firebase
    .database()
    .ref('reviews')
    .child(id)
    .once('value')
    .then(snapshot => {
      if (snapshot.val()) {
        review = snapshot.val();
      }
    })
    .catch(error => {
      dispatch({ type: PRELOAD_REVIEW_ERROR, error });
    });
  await firebase
    .database()
    .ref('books')
    .child(`${review.bookId}/rating`)
    .once('value')
    .then(snapshot => {
      if (snapshot.val()) {
        const ratingsArr = Object.values(snapshot.val());
        const userRating =
          ratingsArr.reduce((sum, user) => (sum += user.rating), 0) /
          ratingsArr.length;
        dispatch({
          type: PRELOAD_REVIEW_SUCCESS,
          review,
          userRating
        });
      }
    });
};
