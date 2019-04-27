import React, { Component } from 'react';
import ReviewView from './ReviewView';
import { connect } from 'react-redux';
import { saveReview, preloadReview, deleteReview } from './actions';

class ReviewContainer extends Component {
  render() {
    return <ReviewView {...this.props} />;
  }
}

function mapStateToProps(state) {
  const {
    review: { isLoading, review, userRating },
    user: {
      data: { uid }
    }
  } = state;
  return {
    isLoading,
    review,
    userRating,
    uid
  };
}
function mapDispatchToProps(dispatch) {
  return {
    saveReview: review => {
      dispatch(saveReview(review));
    },
    preloadReview: id => {
      dispatch(preloadReview(id));
    },
    deleteReview: id => {
      dispatch(deleteReview(id));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewContainer);
