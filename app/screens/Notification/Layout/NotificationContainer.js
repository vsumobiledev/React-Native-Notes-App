import React, { Component } from 'react';
import NotificationView from './NotificationView';
import { deleteNotification } from '../../../core/redux/notifications/actions';
import { connect } from 'react-redux';

class NotificationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NotificationView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications.data,
    isLoading: state.notifications.isLoading,
    uid: state.user.data ? state.user.data.uid : ''
  };
}
function mapDispatchToProps(dispatch) {
  return {
    deleteNotification: (uid, notifId) =>
      dispatch(deleteNotification(uid, notifId))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer);
