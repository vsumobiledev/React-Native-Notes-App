import {
  LOAD_FILTERED_REVIEWS,
  LOAD_FILTERED_REVIEWS_SUCCESS,
  LOAD_FILTERED_REVIEWS_ERROR
} from './constants';
import firebase from 'firebase';

export const loadFilteredReviews = filters => (dispatch, getState) => {
  dispatch({ type: LOAD_FILTERED_REVIEWS });
  firebase
    .database()
    .ref('reviews')
    .once('value')
    .then(snapshot => {
      let dataReviews = false;
      if (snapshot.val()) {
        const { searchName, tags, isUserReviews } = filters;
        const {
          data: { uid }
        } = getState().user;
        dataReviews = Object.values(snapshot.val()).filter(review => {
          let isSuit = true;
          if (isSuit && searchName) {
            isSuit = review.title.includes(searchName);
          }
          if (isSuit && tags.length > 0) {
            isSuit = tags.every(tag =>
              review.tags.some(reviewTag => reviewTag.name === tag.name)
            );
          }
          if (isSuit && isUserReviews) {
            isSuit = review.authorId === uid;
          }
          return isSuit;
        });
      }
      dispatch({ type: LOAD_FILTERED_REVIEWS_SUCCESS, reviews: dataReviews });
    })
    .catch(error => {
      dispatch({ type: LOAD_FILTERED_REVIEWS_ERROR, error });
    });
};
