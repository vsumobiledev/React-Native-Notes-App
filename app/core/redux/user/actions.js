import { INIT_USER, UPDATE_USER, UPDATE_FAILED } from './constants';
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
            } else {
                dispatch({ type: UPDATE_FAILED });
            }
        });
};
