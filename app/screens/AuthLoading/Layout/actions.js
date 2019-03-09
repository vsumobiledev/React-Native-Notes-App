import { INIT_AUTH, AUTH_STATE_LOGIN, AUTH_STATE_NOT_LOGIN } from './constants';
import NavigationService from '../../../navigation/NavigationService';
import { initUser } from '../../../core/redux/user/actions';
import firebase from 'firebase';

export const initAuthState = () => dispatch => {
    dispatch({ type: INIT_AUTH });
    const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            dispatch({ type: AUTH_STATE_LOGIN, payload: firebaseUser });
            dispatch(initUser(firebaseUser.uid));
            NavigationService.replace('Tab');
        } else {
            dispatch({ type: AUTH_STATE_NOT_LOGIN });
            NavigationService.replace('Login');
        }
        unsubscribe();
    });
};
