import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import { loadReviews, logoutUser } from './actions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        loadReviews: () => dispatch(loadReviews()),
        logout: () => dispatch(logoutUser())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
