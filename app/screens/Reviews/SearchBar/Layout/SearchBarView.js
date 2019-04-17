import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import SearchField from '../../../../shared/component/SearchField';
import Icon from 'react-native-vector-icons/Ionicons';
import { LayoutAnimation } from 'react-native';
import Filters from '../Filters';
import styles from './styles';

class SearchBarView extends React.Component {
  state = {
    searchName: '',
    selectedTags: [],
    isOnlyUserReviews: false,
    expanded: false
  };
  onChangeSearchText = searchName => {
    this.setState({ searchName });
    this.props.loadFilteredReviews({});
  };
  selectTag = tag => {
    const { selectedTags } = this.state;
    selectedTags.push(tag);
    this.setState({ selectedTags });
    this.props.loadFilteredReviews({});
  };

  deselectTag = value => {
    const { tags } = this.state;
    tags.splice(tags.findIndex(tag => tag.value === value) - 1, 1);
    this.setState({ tags });
    this.props.loadFilteredReviews({});
  };

  onCheckBoxClick = () => {
    const { isOnlyUserReviews } = this.state;
    this.setState({ isOnlyUserReviews: !isOnlyUserReviews });
    this.props.loadFilteredReviews({});
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
    const { searchName, expanded, tags, isOnlyUserReviews } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchField
            placeholder="Search..."
            value={searchName}
            onChange={this.onChangeSearchText}
          />
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
          isOnlyUserReviews={isOnlyUserReviews}
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
