import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const TabBarIcon = ({ tintColor, renderIcon }) => {
  return <View stylee={styles.container}>{renderIcon(tintColor)}</View>;
};

TabBarIcon.propTypes = {
  renderIcon: PropTypes.func,
  tintColor: PropTypes.stringА
};

export default TabBarIcon;
