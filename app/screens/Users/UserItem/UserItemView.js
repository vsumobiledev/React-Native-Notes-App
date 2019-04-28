import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const UserItemView = ({ data, openUserDetail }) => {
  const { email, firstName, lastName, avatar, uid } = data;
  return (
    <TouchableOpacity
      style={styles.container}
      elevation={5}
      onPress={() => openUserDetail(uid)}
    >
      <View style={styles.avatarWrapper}>
        <Image
          style={styles.avatar}
          source={
            avatar
              ? { uri: avatar }
              : require('../../../assets/images/default-avatar.png')
          }
        />
      </View>
      <View style={styles.dataWrapper}>
        <Text style={styles.nameText}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.subTitleText}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

UserItemView.propTypes = {
  openUserDetail: PropTypes.func,
  data: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    firtName: PropTypes.string,
    lastName: PropTypes.string,
    uid: PropTypes.string
  })
};

export default UserItemView;
