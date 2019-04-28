import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetailView from './UserDetailView';
import { subscribeUser, deleteUser, initUser } from './actions';

class UserDetailContainer extends Component {
  render() {
    return <UserDetailView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.userDetail.isLoading,
    role: state.user.data ? state.user.data.role : 'unknown',
    userUid: state.user.data ? state.user.data.uid : '',
    isDataLoading: state.userDetail.isDataLoading,
    user: state.userDetail.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    subscribeUser: (sUid, cUid, isSub) =>
      dispatch(subscribeUser(sUid, cUid, isSub)),
    deleteUser: uid => dispatch(deleteUser(uid)),
    initUser: uid => dispatch(initUser(uid))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailContainer);
