import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Tag from '../../components/Tag';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class AddTagView extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <TouchableOpacity onPress={onClick}>
        <View style={styles.container}>
          <Icon name="ios-add" size={20} />
          <Tag name="Add tag" color="white" />
        </View>
      </TouchableOpacity>
    );
  }
}
AddTagView.propTypes = {
  onClick: PropTypes.func
};

export default AddTagView;
