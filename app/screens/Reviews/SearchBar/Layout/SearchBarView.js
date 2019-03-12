import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import SearchField from '../../../../shared/component/SearchField';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
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
  addTag = tag => {
    const { selectedTags } = this.state;
    selectedTags.push(tag);
    this.setState({ selectedTags });
    this.props.loadFilteredReviews({});
  };
  handleFilterMenu = () => {
    const { expanded, animationValue } = this.state;
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, 'easeInEaseOut', 'scaleY')
    );
    this.setState({
      expanded: !expanded,
      animationValue: animationValue ? 0 : 1
    });
  };
  render() {
    const { searchName, expanded } = this.state;
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
            <IoniconsComponent
              style={styles.icon}
              name="ios-funnel"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Filters expanded={expanded} />
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
