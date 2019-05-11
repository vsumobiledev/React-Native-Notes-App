import {
  UPDATE_USERS,
  UPDATE_USERS_SUCCESS,
} from './constants';
import firebase from 'firebase';

export const initUsers = () => dispatch => {
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
            subscriptions: val[key].subscriptions ? val[key].subscriptions : [],
            subscribers: val[key].subscribers ? val[key].subscribers : [],
            uid: key
          }
        };
      }, {});
      dispatch({ type: UPDATE_USERS_SUCCESS, payload: user });
    }
  });
};
