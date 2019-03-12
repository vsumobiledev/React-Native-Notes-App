import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadFilteredReviews } from './actions';
import SearchBarView from './SearchBarView';

class SearchBarContainer extends Component {
  render() {
    return <SearchBarView {...this.props} />;
  }
}

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    loadFilteredReviews: filters => dispatch(loadFilteredReviews(filters))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarContainer);
