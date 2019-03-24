import React, { Component } from 'react';
import EditProfileView from './EditProfileView';
import { connect } from 'react-redux';
import { saveUser } from '../../../core/redux/user/actions';

class EditProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <EditProfileView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
    isLoading: state.user.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    saveUser: user => {
      dispatch(saveUser(user));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);
