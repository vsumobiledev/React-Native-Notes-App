import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadFilteredReviews } from './actions';
import SearchBarView from './SearchBarView';

class SearchBarContainer extends Component {
    state = {
        searchName: '',
        selectedTags: [],
        isOnlyUserReviews: false,
    };
    onChangeSearchText = (searchName) => {
        this.setState({ searchName });
        this.props.loadFilteredReviews({});
    }
    addTag = (tag) => {
        const { selectedTags } = this.state;
        selectedTags.push(tag);
        this.setState({ selectedTags });
        this.props.loadFilteredReviews({});
    }
    render() {
        return <SearchBarView {...this.props} />;
    }
}

SearchBarContainer.propTypes = {
    loadFilteredReviews: PropTypes.func
};

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        loadFilteredReviews: (filters) => dispatch(loadFilteredReviews(filters)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBarContainer);
