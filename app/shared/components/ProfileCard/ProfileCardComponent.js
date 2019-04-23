import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const ProfileCardComponent = ({ user }) => (
  <View style={styles.profileCard}>
    <View style={styles.avatarWrapper}>
      <Image
        style={styles.avatar}
        source={
          user.avatar
            ? { uri: user.avatar }
            : require('../../../assets/images/default-avatar.png')
        }
      />
    </View>
    <View style={styles.dataWrapper}>
      <Text style={styles.nameText}>
        {user.firstName} {user.lastName}
      </Text>
      <Text style={styles.subTitleText}>{user.email}</Text>
    </View>
  </View>
);

ProfileCardComponent.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    uid: PropTypes.string,
    avatar: PropTypes.string,
    role: PropTypes.bool
  })
};

export default ProfileCardComponent;
