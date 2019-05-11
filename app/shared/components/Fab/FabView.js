import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const FabView = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Icon style={styles.fabIcon} color="white" name="ios-add" size={36} />
    </TouchableOpacity>
  );
};

FabView.propTypes = {
  onPress: PropTypes.func
};

export default FabView;
