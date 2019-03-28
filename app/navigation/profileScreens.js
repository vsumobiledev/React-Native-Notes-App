import React from 'react';
import EditProfile from '../screens/EditProfile/Layout';
import Notification from '../screens/Notification/Layout';
import Profile from 'app/screens/Profile/Layout';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.state.params.logOut()}>
          <Icon
            name="ios-exit"
            style={{ marginRight: 15 }}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      )
    })
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: 'Edit Profile'
    }
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      title: 'Notification'
    }
  }
});

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
export default ProfileStack;
