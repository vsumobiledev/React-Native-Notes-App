import {
    INIT_USER,
    UPDATE_USER,
    UPDATE_FAILED,
    LOGOUT_USER,
    UPDATE_AVATAR,
    SAVE_USER,
    SAVE_USER_FAILED,
    SAVE_USER_SUCCESS
} from './constants';
import NavigationService from '../../../navigation/NavigationService';
import firebase from 'firebase';

export const initUser = uid => dispatch => {
    dispatch({ type: INIT_USER });
    firebase
        .database()
        .ref()
        .child('users')
        .child(uid)
        .on('value', e => {
            if (e.val()) {
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        ...e.val(),
                        uid
                    }
                });
                dispatch(initAvatar(uid));
            } else {
                dispatch({ type: UPDATE_FAILED });
            }
        });
};

export const initAvatar = uid => dispatch => {
    firebase
        .storage()
        .ref()
        .child(`avatars/${uid}.png`)
        .getDownloadURL()
        .then(
            url => {
                dispatch({ type: UPDATE_AVATAR, payload: url });
            },
            () => {
                dispatch({ type: UPDATE_FAILED });
            }
        );
};

export const logoutUser = () => dispatch => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch({ type: LOGOUT_USER });
            NavigationService.setToRoot('Login');
        });
};

export const saveUser = user => dispatch => {
    dispatch({ type: SAVE_USER, payload: user });
    firebase
        .database()
        .ref()
        .child('users')
        .child(user.uid)
        .set(user)
        .then(
            () => {
                dispatch({ type: SAVE_USER_SUCCESS });
            },
            () => {
                dispatch({ type: SAVE_USER_FAILED });
            }
        );
};
