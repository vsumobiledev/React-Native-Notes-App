import {
  UPLOAD_REVIEW,
  UPLOAD_REVIEW_SUCCESS,
  UPLOAD_REVIEW_ERROR
} from './constants';
import { loadFilteredReviews } from '../../Reviews/ReviewsList/Layout/actions';
import NavigationService from '../../../navigation/NavigationService';
import firebase from 'firebase';
import Toast from 'react-native-root-toast';
import uuidv4 from 'uuid/v4';

export const uploadReview = review => (dispatch, getState) => {
  dispatch({ type: UPLOAD_REVIEW });
  const {
    data: { lastName, firstName, uid }
  } = getState().user;
  const key = uuidv4();
  review.author = `${lastName} ${firstName}`;
  review.authorId = uid;
  review.key = key;
  firebase
    .database()
    .ref()
    .child('reviews')
    .child(key)
    .set(review)
    .then(
      () => {
        dispatch({ type: UPLOAD_REVIEW_SUCCESS });
        Toast.show('Created', {
          position: 70
        });
        dispatch(loadFilteredReviews());
        NavigationService.navigate('Reviews');
      },
      () => {
        dispatch({ type: UPLOAD_REVIEW_ERROR });
      }
    );
};
