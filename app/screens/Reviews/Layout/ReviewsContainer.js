import React, { Component } from 'react';
import ReviewsView from './ReviewsView';
import { connect } from 'react-redux';
import { loadReviews, logoutUser } from './actions';

class ReviewsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ReviewsView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    };
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
)(ReviewsContainer);
