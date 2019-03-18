import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';
import { Alert } from 'react-native';
import firebase from 'firebase';

export const loginUser = (login, password) => dispatch => {
  dispatch({ type: LOGIN });
  firebase
    .auth()
    .signInWithEmailAndPassword(login, password)
    .then(
      user => {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      },
      error => {
        dispatch({ type: LOGIN_FAILED });
        Alert.alert('Login Error', error.message);
      }
    );
};
