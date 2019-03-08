import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import LoginView from './LoginView';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.login.isLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        login: (login, password) => {
            dispatch(loginUser(login, password));
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
