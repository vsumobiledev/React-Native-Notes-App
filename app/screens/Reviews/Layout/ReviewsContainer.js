import React, { Component } from 'react';
import ReviewsView from './ReviewsView';
import { connect } from 'react-redux';
import { loadReviews } from './actions';

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ReviewsView {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    loadReviews: () => dispatch(loadReviews())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);
