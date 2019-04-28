import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import NotificationItem from '../NotificationItem/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from './styles';
import PropTypes from 'prop-types';

class NotificationView extends Component {
  constructor(props) {
    super(props);
  }

  deleteNotification = notifId => {
    this.props.deleteNotification(this.props.uid, notifId);
  };

  render() {
    const { notifications } = this.props;
    return (
      <View style={styles.container}>
        {!this.props.isLoading ? (
          Object.keys(notifications).length > 0 ? (
            <SwipeListView
              useFlatList
              data={Object.keys(notifications)}
              keyExtractor={item => `notif${item}`}
              renderItem={({ item }) => (
                <NotificationItem data={notifications[item]} />
              )}
              renderHiddenItem={({ item }) => (
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => this.deleteNotification(item)}
                >
                  <Icon name="ios-trash" color="#fff" size={25} />
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              )}
              rightOpenValue={-100}
              disableRightSwipe={true}
            />
          ) : (
            <View style={styles.noNotif}>
              <Text>You have no notifications</Text>
            </View>
          )
        ) : (
          <View>
            <ActivityIndicator size="large" color="green" />
          </View>
        )}
      </View>
    );
  }
}

NotificationView.propTypes = {
  notifications: PropTypes.object,
  isLoading: PropTypes.bool,
  uid: PropTypes.string,
  deleteNotification: PropTypes.func
};

export default NotificationView;
