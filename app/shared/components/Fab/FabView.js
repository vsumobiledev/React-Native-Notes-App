import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const FabView = ({ onPress, bottom }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.fab,
        bottom: bottom
      }}
    >
      <IoniconsComponent
        style={styles.fabIcon}
        color="white"
        name="ios-add"
        size={36}
      />
    </TouchableOpacity>
  );
};

FabView.propTypes = {
  onPress: PropTypes.func,
  bottom: PropTypes.number
};

export default FabView;
