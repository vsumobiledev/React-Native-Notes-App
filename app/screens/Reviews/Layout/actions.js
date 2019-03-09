import { LOAD_REVIEWS } from './constants';
import { LOGOUT_USER } from '../../../core/redux/user/constants';
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
            dispatch({ type: LOGOUT_USER });
            NavigationService.replace('Login');
        });
};
