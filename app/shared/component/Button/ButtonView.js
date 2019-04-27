import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styles from './styles';

class ButtonView extends Component {
  render() {
    const { onClick, text, isLoading, colorStart, colorEnd } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onClick}>
        <LinearGradient
          style={styles.gradient}
          colors={[colorStart, colorEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={[styles.text, { marginRight: isLoading ? 5 : 0 }]}>
            {text}
          </Text>
          {isLoading && <ActivityIndicator size="small" color="white" />}
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
ButtonView.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  colorStart: PropTypes.string,
  colorEnd: PropTypes.string
};

export default ButtonView;
