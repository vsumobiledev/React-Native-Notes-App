import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';
import { logoutUser } from '../../../core/redux/user/actions';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ProfileView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data,
        isLoading: state.user.isLoading,
        isAvatarLoading: state.user.isAvatarLoading,
        avatar: state.user.avatar
    };
}
function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logoutUser())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);
