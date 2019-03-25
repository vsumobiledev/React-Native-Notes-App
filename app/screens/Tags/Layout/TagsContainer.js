import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initTags, addTag, deleteTag, editTag } from './actions';
import TagsView from './TagsView';

class TagsContainer extends Component {
  render() {
    return <TagsView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.tags.isLoading,
    tags: state.tags.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    initTags: () => dispatch(initTags()),
    addTag: tag => dispatch(addTag(tag)),
    deleteTag: tag => dispatch(deleteTag(tag)),
    editTag: (lastKey, tag) => dispatch(editTag(lastKey, tag))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsContainer);
