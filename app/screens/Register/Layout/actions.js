import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } from './constants';
import { Alert } from 'react-native';
import firebase from 'firebase';

export const registerUser = (user, password) => dispatch => {
    dispatch({ type: REGISTER });
    firebase
        .auth()
        .createUserWithEmailAndPassword(user.login, password)
        .then(
            firebaseUser => {
                const { firstName, lastName, login } = user;
                firebase
                    .database()
                    .ref()
                    .child('users')
                    .push({
                        firstName,
                        lastName,
                        email: login
                    });
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: {
                        firebaseUser,
                        ...user
                    }
                });
            },
            error => {
                dispatch({ type: REGISTER_FAILED });
                Alert.alert('Register Error', error.message);
            }
        );
};
