import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';

const MenuRowComponent = ({ data, index }) => {
  const { onPress, icon, badge, text } = data;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.menuRow,
          ...(index === 0 ? styles.menuRowTop : null)
        }}
      >
        <Icon name={icon} style={styles.menuIcon} size={30} color="black" />
        <Text style={styles.menuText}>{text}</Text>
        {badge ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        ) : null}
        <Icon
          name="ios-arrow-forward"
          style={styles.menuArrowIcon}
          size={30}
          color={AppStyles.rgba.BLACK_03}
        />
      </View>
    </TouchableOpacity>
  );
};

MenuRowComponent.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    onPress: PropTypes.func,
    text: PropTypes.string
  }),
  index: PropTypes.number
};

export default MenuRowComponent;
