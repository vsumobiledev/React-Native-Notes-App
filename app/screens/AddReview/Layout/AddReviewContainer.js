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
  const { uid, firstName, lastName, subscribers } = state.user.data;
  return {
    isLoading,
    isLoadingHints,
    error,
    books,
    user: { uid, firstName, lastName, subscribers }
  };
}
function mapDispatchToProps(dispatch) {
  return {
    uploadReview: (review, selectedBook, user) => {
      dispatch(uploadReview(review, selectedBook, user));
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
