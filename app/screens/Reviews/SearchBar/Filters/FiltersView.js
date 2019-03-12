import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
  Easing
} from 'react-native';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import CancelableTag from '../CancelableTag';
import RotateAnimation from '../../../../utils/rotateAnimation';
import AddTag from '../AddTag';
import CheckBox from '../CheckBox';
import styles from './styles';
class FiltersView extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: false,
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

  handleFilterMenu = () => {
    const { expanded, animationValue } = this.state;
    Animated.timing(this.rotateValue, {
      toValue: animationValue ? 0 : 1,
      duration: 350,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, 'easeInEaseOut', 'scaleY')
    );
    this.setState({
      expanded: !expanded,
      animationValue: animationValue ? 0 : 1
    });
  };

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
    const { tags, isChecked, expanded } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleFilterMenu}
          activeOpacity={1}
          style={styles.filterBtn}
        >
          <Animated.View style={this.transformStyle}>
            <IoniconsComponent
              style={styles.icon}
              name="ios-arrow-down"
              size={20}
            />
          </Animated.View>
          <Text style={styles.btnText}>Filters</Text>
          <Animated.View style={this.transformStyle}>
            <IoniconsComponent
              style={styles.icon}
              name="ios-arrow-down"
              size={20}
            />
          </Animated.View>
        </TouchableOpacity>
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

export default FiltersView;
