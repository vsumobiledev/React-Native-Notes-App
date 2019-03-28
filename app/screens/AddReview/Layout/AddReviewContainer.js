import React, { Component } from 'react';
import AddReviewView from './AddReviewView';
import { connect } from 'react-redux';
import { uploadReview } from './actions';

class AddReviewContainer extends Component {
  render() {
    return <AddReviewView {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { isLoading, error } = state.addReview;
  return {
    isLoading,
    error
  };
}
function mapDispatchToProps(dispatch) {
  return {
    uploadReview: review => {
      dispatch(uploadReview(review));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewContainer);
