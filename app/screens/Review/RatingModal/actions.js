import {
  SAVE_RATING,
  SAVE_RATING_ERROR,
  SAVE_RATING_SUCCESS,
  LOAD_RATING,
  LOAD_RATING_ERROR,
  LOAD_RATING_SUCCESS
} from './constants';
import firebase from 'firebase';
import Toast from 'react-native-root-toast';

export const saveRating = (rating, bookId) => (dispatch, getState) => {
  dispatch({ type: SAVE_RATING });
  const firebaseRef = firebase.database().ref();
  const {
    data: { uid }
  } = getState().user;
  firebaseRef
    .child('books')
    .child(`${bookId}/rating/${uid}/rating`)
    .set(rating)
    .then(() => {
      dispatch({ type: SAVE_RATING_SUCCESS });
      Toast.show('Saved', {
        position: 70,
        opacity: 1
      });
      dispatch(loadRating(bookId));
    })
    .catch(error => {
      dispatch({ type: SAVE_RATING_ERROR, error });
    });
};

export const loadRating = bookId => (dispatch, getState) => {
  dispatch({ type: LOAD_RATING });
  const {
    data: { uid }
  } = getState().user;
  firebase
    .database()
    .ref('books')
    .child(`${bookId}/rating/${uid}`)
    .once('value')
    .then(snapshot => {
      let rating = 3;
      if (snapshot.val()) {
        rating = snapshot.val().rating;
      }
      dispatch({ type: LOAD_RATING_SUCCESS, rating });
    })
    .catch(error => {
      dispatch({ type: LOAD_RATING_ERROR, error });
    });
};
