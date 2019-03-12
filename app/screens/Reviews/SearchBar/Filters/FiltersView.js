import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  UIManager
} from 'react-native';
import PropTypes from 'prop-types';
import CancelableTag from '../CancelableTag';
import RotateAnimation from '../../../../utils/rotateAnimation';
import AddTag from '../AddTag';
import CheckBox from '../CheckBox';
import styles from './styles';
class FiltersView extends React.Component {
  constructor() {
    super();

    this.state = {
      tags: [
        { value: 'Fantasy', color: '#E94358' },
        { value: 'Horror', color: '#E94358' },
        { value: 'Comedy', color: '#E94358' },
        { value: 'Fantasy1', color: '#E94358' },
        { value: 'Horror1', color: '#E94358' },
        { value: 'Comedy1', color: '#E94358' }
      ],
      isChecked: false,
      animationValue: 0
    };
    this.rotateAnimation = new RotateAnimation();
    this.rotateValue = this.rotateAnimation.getAnimatedInstance();
    this.transformStyle = this.rotateAnimation.getTransformStyle(
      this.rotateValue
    );
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  deselectTag = value => {
    const { tags } = this.state;
    tags.splice(tags.findIndex(tag => tag.value === value) - 1, 1);
    this.setState({ tags });
  };

  onCheckBoxClick = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  };

  renderSelectedTags = tags =>
    tags.map(tag => (
      <CancelableTag
        key={tag.value}
        value={tag.value}
        color={tag.color}
        onClick={this.deselectTag}
      />
    ));

  render() {
    const { tags, isChecked } = this.state;
    const { expanded } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ height: expanded ? null : 0, overflow: 'hidden' }}>
          <View style={styles.tagsContainer}>
            {this.renderSelectedTags(tags)}
            <AddTag />
          </View>
          <TouchableOpacity
            onPress={this.onCheckBoxClick}
            style={styles.checkBoxContainer}
          >
            <CheckBox isCheck={isChecked} />
            <Text style={styles.checkBoxText}>Only my reviews</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FiltersView.propTypes = {
  expanded: PropTypes.bool
};
export default FiltersView;
