import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersView from './UsersView';
import { initUser } from './actions';

class UsersContainer extends Component {
  render() {
    return <UsersView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.data,
    isLoading: state.users.isLoading,
    userUid: state.user.data ? state.user.data.uid : '',
  };
}
function mapDispatchToProps(dispatch) {
  return {
    initUsers: () => dispatch(initUser())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
