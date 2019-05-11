import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  UIManager
} from 'react-native';
import PropTypes from 'prop-types';
import CancelableTag from '../../../../shared/components/CancelableTag';
import NavigationService from '../../../../navigation/NavigationService';
import AddTag from '../../../../shared/components/AddTag';
import CheckBox from '../CheckBox';
import styles from './styles';

class FiltersView extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  onAddTagClick = () => {
    NavigationService.navigate('Tags', { selectTag: this.props.selectTag });
  };

  renderSelectedTags = tags =>
    tags &&
    tags.map(tag => (
      <CancelableTag
        key={tag.name}
        name={tag.name}
        color={tag.color}
        onClick={this.props.deselectTag}
      />
    ));

  getExpandedStyle = expanded => ({
    height: expanded ? null : 0,
    overflow: 'hidden'
  });

  render() {
    const { expanded, isUserReviews, onCheckBoxClick, tags } = this.props;
    return (
      <View style={styles.container}>
        <View style={this.getExpandedStyle(expanded)}>
          <View style={styles.tagsContainer}>
            {this.renderSelectedTags(tags)}
            <AddTag onClick={this.onAddTagClick} />
          </View>
          <TouchableOpacity
            onPress={onCheckBoxClick}
            style={styles.checkBoxContainer}
          >
            <CheckBox isCheck={isUserReviews} />
            <Text style={styles.checkBoxText}>Only my reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FiltersView.propTypes = {
  expanded: PropTypes.bool,
  tags: PropTypes.array,
  isUserReviews: PropTypes.bool,
  deselectTag: PropTypes.func,
  selectTag: PropTypes.func,
  onCheckBoxClick: PropTypes.func
};
export default FiltersView;
