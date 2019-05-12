import {
  SUBSCRIBE,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_FAILED,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
  DELETE_USER,
  INIT_USER_DETAIL,
  UPDATE_USER_DETAIL,
  UPDATE_DETAIL_FAILED
} from './constants';
import firebase from 'firebase';
import { sendNotification } from '../../../core/redux/notifications/actions';
import { NotificationType } from '../../../core/redux/notifications/constants';
import Toast from 'react-native-root-toast';

export const initUser = uid => dispatch => {
  dispatch({ type: INIT_USER_DETAIL });
  firebase
    .database()
    .ref()
    .child('users')
    .child(uid)
    .on('value', e => {
      const val = e.val();
      if (val) {
        dispatch({
          type: UPDATE_USER_DETAIL,
          payload: {
            ...val,
            subscriptions: val.subscriptions ? val.subscriptions : [],
            subscribers: val.subscribers ? val.subscribers : [],
            uid
          }
        });
      } else {
        dispatch({ type: UPDATE_DETAIL_FAILED });
      }
    });
};

export const subscribeUser = (
  subscriberUser,
  channelUid,
  isSubscribed
) => dispatch => {
  dispatch({ type: SUBSCRIBE });
  const firebaseDbRef = firebase.database().ref();
  const { uid: subscriberUid, firstName, lastName } = subscriberUser;
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
                dispatch(
                  sendNotification(channelUid, {
                    type: NotificationType.NEW_SUB,
                    title: 'You have a new subscriber',
                    subTitle: `${firstName} ${lastName}`,
                    data: subscriberUid,
                    date: new Date().toString()
                  })
                );
                dispatch({ type: SUBSCRIBE_SUCCESS });
              },
              () => {
                dispatch({ type: SUBSCRIBE_FAILED });
              }
            );
        },
        () => {
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
              () => {
                dispatch({ type: SUBSCRIBE_FAILED });
              }
            );
        },
        () => {
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
      () => {
        dispatch({ type: DELETE_USER_FAILED });
      }
    );
};
