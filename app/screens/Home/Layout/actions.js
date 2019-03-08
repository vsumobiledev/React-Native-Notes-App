import { LOAD_REVIEWS, LOGOUT } from './constants';
import NavigationService from '../../../navigation/NavigationService';
import firebase from 'firebase';

export function loadReviews() {
    return {
        type: LOAD_REVIEWS
    };
}

export const logoutUser = () => dispatch => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            NavigationService.navigate('Login');
            dispatch({ type: LOGOUT });
        });
};
