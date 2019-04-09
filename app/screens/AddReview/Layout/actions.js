import {
  UPLOAD_REVIEW,
  UPLOAD_REVIEW_SUCCESS,
  UPLOAD_REVIEW_ERROR,
  PRELOAD_BOOKS,
  PRELOAD_BOOKS_SUCCESS,
  PRELOAD_BOOKS_ERROR
} from './constants';
import { loadFilteredReviews } from '../../Reviews/ReviewsList/Layout/actions';
import NavigationService from '../../../navigation/NavigationService';
import firebase from 'firebase';
import { Platform } from 'react-native';
import Toast from 'react-native-root-toast';
import { NativeModules } from 'react-native';
import uuidv4 from 'uuid/v4';

export const uploadReview = review => (dispatch, getState) => {
  dispatch({ type: UPLOAD_REVIEW });
  const uri = review.image;
  const key = uuidv4();
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
  const fs = NativeModules.RNFetchBlob.fs;

  fs.readFile(uploadUri, 'base64').then(imageData => {
    const {
      data: { lastName, firstName, uid }
    } = getState().user;
    review.author = `${lastName} ${firstName}`;
    review.authorId = uid;
    review.key = key;
    review.image = `data:image/png;base64,${imageData}`;
    firebase
      .database()
      .ref()
      .child('reviews')
      .child(key)
      .set(review)
      .then(() => {
        dispatch({ type: UPLOAD_REVIEW_SUCCESS });
        Toast.show('Created', {
          position: 70
        });
        dispatch(loadFilteredReviews());
        NavigationService.navigate('Reviews');
      })
      .catch(error => {
        dispatch({ type: UPLOAD_REVIEW_ERROR, error });
      });
  });
};
export const preloadBooks = bookTitle => dispatch => {
  dispatch({ type: PRELOAD_BOOKS });
  firebase
    .database()
    .ref('books')
    .once('value')
    .then(snapshot => {
      let booksData = false;
      if (snapshot.val()) {
        const data = Object.entries(snapshot.val());
        booksData = data.filter(bookData =>
          bookData[1].name.includes(bookTitle)
        );
      }
      dispatch({ type: PRELOAD_BOOKS_SUCCESS, books: booksData });
    })
    .catch(error => {
      dispatch({ type: PRELOAD_BOOKS_ERROR, error });
    });
};
