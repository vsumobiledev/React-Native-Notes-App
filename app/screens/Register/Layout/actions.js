import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } from './constants';
import { Alert } from 'react-native';
import { initUser } from '../../../core/redux/user/actions';
import NavigationService from '../../../navigation/NavigationService';
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
                    .child(firebaseUser.uid)
                    .set({
                        firstName,
                        lastName,
                        email: login
                    })
                    .then(() => {
                        dispatch({
                            type: REGISTER_SUCCESS,
                            payload: {
                                firebaseUser,
                                ...user
                            }
                        });
                        dispatch(initUser(firebaseUser.uid));
                        NavigationService.replace('Tab');
                    }, error => {
                        dispatch({ type: REGISTER_FAILED });
                        Alert.alert('Register Error', error);
                    });
            },
            error => {
                dispatch({ type: REGISTER_FAILED });
                Alert.alert('Register Error', error.message);
            }
        );
};
