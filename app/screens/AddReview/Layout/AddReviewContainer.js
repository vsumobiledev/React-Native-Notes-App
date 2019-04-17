import React, { Component } from 'react';
import AddReviewView from './AddReviewView';
import { connect } from 'react-redux';
import { uploadReview, preloadBooks } from './actions';

class AddReviewContainer extends Component {
  render() {
    return <AddReviewView {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { isLoading, isLoadingHints, error, books } = state.addReview;
  return {
    isLoading,
    isLoadingHints,
    error,
    books
  };
}
function mapDispatchToProps(dispatch) {
  return {
    uploadReview: review => {
      dispatch(uploadReview(review));
    },
    preloadBooks: title => {
      dispatch(preloadBooks(title));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewContainer);
