import React, { Component } from 'react';
import AuthLoadingView from './AuthLoadingView';
import { connect } from 'react-redux';
import { initAuthState } from './actions';

class AuthLoadingContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AuthLoadingView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.authLoading.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    initAuth: () => {
      dispatch(initAuthState());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoadingContainer);
