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
  const { isLoading, reviews, error } = state.reviewsList;
  return {
    isLoading,
    reviews,
    error
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
