import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import SearchField from '../../../../shared/components/SearchField';
import Icon from 'react-native-vector-icons/Ionicons';
import { LayoutAnimation } from 'react-native';
import Filters from '../Filters';
import styles from './styles';

class SearchBarView extends Component {
  state = {
    searchName: '',
    tags: [],
    isUserReviews: false,
    expanded: false
  };
  onChangeSearchText = searchName => {
    this.setState({ searchName });
  };
  selectTag = tag => {
    const { tags } = this.state;
    if (tags.findIndex(item => item.name === tag.name) === -1) {
      tags.push(tag);
      this.setState({ tags }, this.onSubmitEditing);
    }
  };

  deselectTag = value => {
    const { tags } = this.state;
    tags.splice(tags.findIndex(tag => tag.name === value), 1);
    this.setState({ tags }, this.onSubmitEditing);
  };

  onSubmitEditing = () => {
    const { searchName, tags, isUserReviews } = this.state;
    this.props.loadFilteredReviews({ searchName, tags, isUserReviews });
  };

  onCheckBoxClick = () => {
    const { isUserReviews } = this.state;
    this.setState({ isUserReviews: !isUserReviews }, this.onSubmitEditing);
  };

  handleFilterMenu = () => {
    const { expanded } = this.state;
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, 'easeInEaseOut', 'scaleY')
    );
    this.setState({
      expanded: !expanded
    });
  };
  render() {
    const { searchName, expanded, tags, isUserReviews } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <View style={styles.searchFieldWrapper}>
            <SearchField
              placeholder="Search..."
              value={searchName}
              onChange={this.onChangeSearchText}
              onSubmitEditing={this.onSubmitEditing}
            />
          </View>
          <TouchableOpacity
            onPress={this.handleFilterMenu}
            activeOpacity={0.1}
            style={styles.filterBtn}
          >
            <Icon style={styles.icon} name="ios-funnel" size={20} />
          </TouchableOpacity>
        </View>
        <Filters
          tags={tags}
          selectTag={this.selectTag}
          deselectTag={this.deselectTag}
          expanded={expanded}
          isUserReviews={isUserReviews}
          onCheckBoxClick={this.onCheckBoxClick}
        />
      </View>
    );
  }
}

SearchBarView.propTypes = {
  searchName: PropTypes.string,
  expanded: PropTypes.bool,
  loadFilteredReviews: PropTypes.func
};

export default SearchBarView;
