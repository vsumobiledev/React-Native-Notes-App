import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetailView from './UserDetailView';
import { subscribeUser } from './actions';

class UserDetailContainer extends Component {
  render() {
    return <UserDetailView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.userDetail.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    subscribeUser: (sUid, cUid) => dispatch(subscribeUser(sUid, cUid))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailContainer);
