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
    isDataLoading: state.userDetail.isDataLoading,
    user: state.userDetail.data,
    profile: state.user.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    subscribeUser: (sUser, cUid, isSub) =>
      dispatch(subscribeUser(sUser, cUid, isSub)),
    deleteUser: uid => dispatch(deleteUser(uid)),
    initUser: uid => dispatch(initUser(uid))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailContainer);
