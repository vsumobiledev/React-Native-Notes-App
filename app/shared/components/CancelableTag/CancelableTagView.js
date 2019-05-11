import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import Tag from '../../components/Tag';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleSheetFactory from './styles';
import AppStyles from '../../../config/styles';

class CancelableTagView extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheetFactory.getSheet(props.color);
  }
  onPress = () => {
    const { name, onClick } = this.props;
    onClick(name);
  };
  render() {
    const { name, color } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={this.styles.container}>
          <Tag name={name} color={color} />
          <Icon
            color={
              tinycolor(color).getBrightness() < 100
                ? AppStyles.color.WHITE
                : AppStyles.color.BLACK
            }
            style={this.styles.icon}
            name="ios-close"
            size={20}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
CancelableTagView.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default CancelableTagView;
