import React, { Component } from 'react';
import RatingModalView from './RatingModalView';
import { connect } from 'react-redux';
import { saveRating, loadRating } from './actions';

class RatingModalContainer extends Component {
  render() {
    return <RatingModalView {...this.props} />;
  }
}

function mapStateToProps(state) {
  const {
    reviewModal: { isLoading, rating }
  } = state;
  return {
    isLoading,
    rating
  };
}
function mapDispatchToProps(dispatch) {
  return {
    saveRating: (rating, bookId) => {
      dispatch(saveRating(rating, bookId));
    },
    loadRating: bookId => {
      dispatch(loadRating(bookId));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingModalContainer);
