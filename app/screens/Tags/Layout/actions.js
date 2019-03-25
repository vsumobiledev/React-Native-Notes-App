import {
  INIT_TAGS,
  UPDATE_TAGS,
  UPDATE_TAGS_FAILED,
  ADD_TAG,
  ADD_TAG_FAILED,
  ADD_TAG_SUCCESS,
  DELETE_TAG,
  EDIT_TAG
} from './constants';
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

export const addTag = tag => dispatch => {
  dispatch({ type: ADD_TAG });
  firebase
    .database()
    .ref()
    .child('tags')
    .child(tag.name)
    .set(tag)
    .then(
      () => {
        dispatch({
          type: ADD_TAG_SUCCESS,
          payload: {
            [tag.name]: tag
          }
        });
      },
      () => {
        dispatch({ type: ADD_TAG_FAILED });
      }
    );
};

export const deleteTag = tag => dispatch => {
  dispatch({ type: DELETE_TAG });
  firebase
    .database()
    .ref()
    .child('tags')
    .child(tag.name)
    .remove();
};

export const editTag = (lastKey, tag) => dispatch => {
  dispatch({ type: EDIT_TAG });
  dispatch(deleteTag({ name: lastKey }));
  dispatch(addTag(tag));
};
