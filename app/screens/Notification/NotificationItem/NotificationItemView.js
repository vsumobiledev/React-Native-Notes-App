import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NotificationType } from '../../../core/redux/notifications/constants';
import styles from './styles';
import PropTypes from 'prop-types';

const iconName = {
  [NotificationType.NEW_SUB]: 'ios-person-add',
  [NotificationType.NEW_REVIEW]: 'bookmarks'
};

const UserItemView = ({ data: itemData, openUserDetail }) => {
  const { data, title, subTitle, date, type } = itemData;
  return (
    <View style={styles.container}>
      <Icon name={iconName[type]} size={40} color="black" />
      <View style={styles.dataWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.date}>{new Date(date).toGMTString().replace(' GMT', '')}</Text>
      </View>
    </View>
  );
};

UserItemView.propTypes = {
  openUserDetail: PropTypes.func,
  data: PropTypes.shape({
    data: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    sunTitle: PropTypes.string,
    type: PropTypes.string
  })
};

export default UserItemView;
