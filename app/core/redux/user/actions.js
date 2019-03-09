import { INIT_USER, UPDATE_USER, UPDATE_FAILED } from './constants';
import { Alert } from 'react-native';
import firebase from 'firebase';

export const initUser = uid => dispatch => {
    dispatch({ type: INIT_USER });
    firebase
        .database()
        .ref()
        .child('users')
        .child(uid)
        .on('value', e => {
            Alert.alert('test', JSON.stringify(e));
            if (e.val()) {
                dispatch({ type: UPDATE_USER, payload: e.val() });
            } else {
                dispatch({ type: UPDATE_FAILED });
            }
        });
};
