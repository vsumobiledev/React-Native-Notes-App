import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { connect } from 'react-redux';

const BadgeIcon = props => {
  const { badgeCount } = props;
  return (
    <View style={styles.container}>
      <Icon {...props} />
      {badgeCount > 0 ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      ) : null}
    </View>
  );
};

BadgeIcon.propTypes = {
  onPress: PropTypes.func,
  badgeCount: PropTypes.number,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};

export default connect(
  state => ({
    badgeCount: Object.keys(state.notifications.data).length
  }),
  {}
)(BadgeIcon);
