import { INIT_TAGS, UPDATE_TAGS, UPDATE_TAGS_FAILED } from './constants';
import firebase from 'firebase';

export const initTags = () => dispatch => {
  dispatch({ type: INIT_TAGS });
  firebase
    .database()
    .ref()
    .child('tags')
    .on('value', e => {
      if (e.val()) {
        dispatch({
          type: UPDATE_TAGS,
          payload: e.val()
        });
      } else {
        dispatch({ type: UPDATE_TAGS_FAILED });
      }
    });
};
