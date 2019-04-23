import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import Tag from '../../components/Tag';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleSheetFactory from './styles';

class CancelableTagView extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheetFactory.getSheet(props.color);
  }
  onPress = () => {
    const { name, onClick } = this.props;
    onClick(name);
  };
  render() {
    const { name, color, onClick } = this.props;
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={this.styles.container}>
          <Tag name={name} color={color} />
          <Icon
            color={
              tinycolor(color).getBrightness() < 100 ? '#ffffff' : '#000000'
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
