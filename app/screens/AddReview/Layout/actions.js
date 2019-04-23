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

export const uploadReview = review => async (dispatch, getState) => {
  dispatch({ type: UPLOAD_REVIEW });
  const { selectedBook } = review;
  const uri = review.image;
  const bookId = selectedBook ? selectedBook : uuidv4();
  const reviewId = uuidv4();
  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
  const {
    data: { lastName, firstName, uid }
  } = getState().user;
  const fs = NativeModules.RNFetchBlob;
  const firebaseRef = firebase.database().ref();
  if (!selectedBook) {
    await fs.readFile(uploadUri, 'base64').then(imageData => {
      const image = `data:image/png;base64,${imageData}`;
      review.image = image;
    });
    review.author = `${lastName} ${firstName}`;
    review.authorId = uid;
    review.key = reviewId;

    await firebaseRef
      .child('books')
      .child(bookId)
      .set({
        key: bookId,
        title: review.title,
        rating: [
          {
            key: uid,
            rating: review.authorRating
          }
        ],
        image: review.image
      });
  } else {
    await firebaseRef
      .child('books')
      .child(bookId)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const { rating } = snapshot.val();
          rating.push({
            key: uid,
            rating: review.authorRating
          });
          firebaseRef
            .child('books')
            .child(bookId)
            .child('rating')
            .set(rating);
        }
      });
  }
  review.bookId = bookId;

  await firebaseRef
    .child('reviews')
    .child(reviewId)
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
        const data = Object.values(snapshot.val());
        booksData = data
          .filter(bookData => bookData.title.includes(bookTitle))
          .map(book => {
            book.rating =
              book.rating.reduce((sum, user) => (sum += user.rating), 0) /
              book.rating.length;
            return book;
          });
      }
      dispatch({ type: PRELOAD_BOOKS_SUCCESS, books: booksData });
    })
    .catch(error => {
      dispatch({ type: PRELOAD_BOOKS_ERROR, error });
    });
};
