import {
  UPDATE_NOTIFICATIONS_SUCCESS,
  INIT_NOTIFICATIONS,
  SEND_NOTIFICATION,
  SEND_NOTIFICATION_FAILED,
  SEND_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION,
  DELETE_NOTIFICATION_FAILED,
  DELETE_NOTIFICATION_SUCCESS
} from './constants';
import firebase from 'firebase';
import Toast from 'react-native-root-toast';

export const initNotifications = uid => dispatch => {
  dispatch({ type: INIT_NOTIFICATIONS });
  firebase
    .database()
    .ref()
    .child('users')
    .child(uid)
    .child('notifications')
    .on('value', e => {
      const data = e.val() ? e.val() : {};
      dispatch({ type: UPDATE_NOTIFICATIONS_SUCCESS, payload: data });
    });
};

export const sendNotification = (uid, notifcationData) => dispatch => {
  dispatch({ type: SEND_NOTIFICATION });
  firebase
    .database()
    .ref()
    .child('users')
    .child(uid)
    .child('notifications')
    .push(notifcationData)
    .then(
      () => {
        dispatch({ type: SEND_NOTIFICATION_SUCCESS });
      },
      () => {
        dispatch({ type: SEND_NOTIFICATION_FAILED });
      }
    );
};

export const deleteNotification = (uid, notifId) => dispatch => {
  dispatch({ type: DELETE_NOTIFICATION });
  firebase
    .database()
    .ref()
    .child('users')
    .child(uid)
    .child('notifications')
    .child(notifId)
    .remove()
    .then(
      () => {
        Toast.show('Deleted', {
          position: 75
        });
        dispatch({ type: DELETE_NOTIFICATION_SUCCESS });
      },
      () => {
        dispatch({ type: DELETE_NOTIFICATION_FAILED });
      }
    );
};
