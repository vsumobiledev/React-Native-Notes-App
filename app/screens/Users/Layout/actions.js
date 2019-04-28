import {
  UPDATE_USERS,
  UPDATE_USERS_SUCCESS,
  UPDATE_USERS_FAILED
} from './constants';
import firebase from 'firebase';

export const initUser = () => dispatch => {
  dispatch({ type: UPDATE_USERS });
  const firebaseRef = firebase.database().ref();
  firebaseRef.child('users').on('value', e => {
    const val = e.val();
    if (val) {
      const user = Object.keys(val).reduce((acc, key) => {
        return {
          ...acc,
          [key]: {
            ...val[key],
            uid: key
          }
        };
      }, {});
      dispatch({ type: UPDATE_USERS_SUCCESS, payload: user });
    }
  });
};
