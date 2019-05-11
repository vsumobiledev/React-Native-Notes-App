import React, { Component } from 'react';
import RegisterView from './RegisterView';
import { connect } from 'react-redux';
import { registerUser } from './actions';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RegisterView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.register.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    register: (user, password) => {
      dispatch(registerUser(user, password));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
