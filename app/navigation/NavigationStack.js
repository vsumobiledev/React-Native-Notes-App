/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';

import AuthLoading from '../screens/AuthLoading/Layout';
import Login from '../screens/Login/Layout';
import Register from '../screens/Register/Layout';
import Reviews from 'app/screens/Reviews/Layout';
import Profile from 'app/screens/Profile/Layout';
import Users from 'app/screens/Users/Layout';
import EditProfile from '../screens/EditProfile/Layout';
import Tags from '../screens/Tags/Layout';
import Notification from '../screens/Notification/Layout';

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Proifle',
        headerRight: (
          <TouchableOpacity onPress={() => navigation.state.params.logOut()}>
            <IoniconsComponent
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
    Tags: {
      screen: Tags,
      navigationOptions: {
        title: 'Tags'
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        title: 'Notification'
      }
    }
  },
  {
    navigationOptions: () => ({
      tabBarLabel: 'Proifle',
      tabBarIcon: ({ tintColor }) => (
        <IoniconsComponent name="ios-contact" size={30} color={tintColor} />
      ),
      title: 'Proifle'
    })
  }
);

const Tab = createBottomTabNavigator(
  {
    Reviews: {
      screen: Reviews,
      navigationOptions: () => ({
        tabBarLabel: 'Reviews',
        tabBarIcon: ({ tintColor }) => (
          <IoniconsComponent name="ios-paper" size={30} color={tintColor} />
        )
      })
    },
    Users: {
      screen: Users,
      navigationOptions: () => ({
        tabBarLabel: 'Users',
        tabBarIcon: ({ tintColor }) => (
          <IoniconsComponent name="ios-people" size={30} color={tintColor} />
        )
      })
    },
    ProfileStack
  },
  {
    initialRouteName: 'Reviews',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#2b5aa6',
      inactiveTintColor: 'gray'
    }
  }
);
const optionsHeaderless = { header: null, gesturesEnabled: false };
const Stack = createStackNavigator(
  {
    Tab: {
      screen: Tab,
      navigationOptions: optionsHeaderless
    },
    AuthLoading: {
      screen: AuthLoading,
      navigationOptions: optionsHeaderless
    },
    Login: {
      screen: Login,
      navigationOptions: optionsHeaderless
    },
    Tags: {
      screen: Tags,
      navigationOptions: optionsHeaderless
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#C0C0C0'
        }
      }
    }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
export default createAppContainer(Stack);
