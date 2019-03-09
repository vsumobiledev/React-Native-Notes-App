import { INIT_AUTH, AUTH_STATE_LOGIN, AUTH_STATE_NOT_LOGIN } from './constants';
import NavigationService from '../../../navigation/NavigationService';
import firebase from 'firebase';

export const initAuthState = () => dispatch => {
    dispatch({ type: INIT_AUTH });
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            dispatch({ type: AUTH_STATE_LOGIN, payload: firebaseUser });
            NavigationService.replace('Tab');
        } else {
            dispatch({ type: AUTH_STATE_NOT_LOGIN });
            NavigationService.replace('Login');
        }
    });
};
