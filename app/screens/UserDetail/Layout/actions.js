import {
  SUBSCRIBE,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILED,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
  DELETE_USER,
  INIT_USER,
  UPDATE_USER,
  UPDATE_FAILED
} from './constants';
import firebase from 'firebase';
import Toast from 'react-native-root-toast';

export const initUser = uid => dispatch => {
  dispatch({ type: INIT_USER });
  firebase
    .database()
    .ref()
    .child('users')
    .child(uid)
    .on('value', e => {
      const val = e.val();
      if (val) {
        dispatch({
          type: UPDATE_USER,
          payload: {
            ...val,
            subscriptions: val.subscriptions ? val.subscriptions : [],
            subscribers: val.subscribers ? val.subscribers : [],
            uid
          }
        });
      } else {
        dispatch({ type: UPDATE_FAILED });
      }
    });
};

export const subscribeUser = (
  subscriberUid,
  channelUid,
  isSubscribed
) => dispatch => {
  dispatch({ type: SUBSCRIBE });
  const firebaseDbRef = firebase.database().ref();
  if (!isSubscribed) {
    firebaseDbRef
      .child('users')
      .child(channelUid)
      .child('subscribers')
      .child(subscriberUid)
      .set(true)
      .then(
        () => {
          firebaseDbRef
            .child('users')
            .child(subscriberUid)
            .child('subscriptions')
            .child(channelUid)
            .set(true)
            .then(
              () => {
                Toast.show('Subscribed', {
                  position: 70
                });
                dispatch({ type: SUBSCRIBE_SUCCESS });
              },
              error => {
                dispatch({ type: SUBSCRIBE_FAILED });
              }
            );
        },
        error => {
          dispatch({ type: SUBSCRIBE_FAILED });
        }
      );
  } else {
    firebaseDbRef
      .child('users')
      .child(channelUid)
      .child('subscribers')
      .child(subscriberUid)
      .remove()
      .then(
        () => {
          firebaseDbRef
            .child('users')
            .child(subscriberUid)
            .child('subscriptions')
            .child(channelUid)
            .remove()
            .then(
              () => {
                Toast.show('Unsubscribed', {
                  position: 70
                });
                dispatch({ type: SUBSCRIBE_SUCCESS });
              },
              error => {
                dispatch({ type: SUBSCRIBE_FAILED });
              }
            );
        },
        error => {
          dispatch({ type: SUBSCRIBE_FAILED });
        }
      );
  }
};

export const deleteUser = uid => dispatch => {
  dispatch({ type: DELETE_USER });
  firebase
    .database()
    .ref()
    .child('users')
    .child(uid)
    .remove()
    .then(
      () => {
        Toast.show('Deleted', {
          position: 70
        });
        dispatch({ type: DELETE_USER_SUCCESS });
      },
      error => {
        dispatch({ type: DELETE_USER_FAILED });
      }
    );
};
