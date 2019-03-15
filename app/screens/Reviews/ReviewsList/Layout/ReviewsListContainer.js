import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFilteredReviews } from './actions';
import ReviewsListView from './ReviewsListView';

class ReviewsListContainer extends Component {
  render() {
    return <ReviewsListView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.reviewsList.isLoading,
    reviews: state.reviewsList.reviews,
    error: state.reviewsList.error
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadFilteredReviews: () => dispatch(loadFilteredReviews())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsListContainer);
