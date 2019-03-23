/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import Reviews from 'app/screens/Reviews/Layout';
import Users from 'app/screens/Users/Layout';
import Tags from '../screens/Tags/Layout';
import AuthStack from './authScreens';
import ProfileStack from './profileScreens';

const Tab = createBottomTabNavigator(
  {
    Reviews: {
      screen: Reviews,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <IoniconsComponent name="ios-paper" size={30} color={tintColor} />
        )
      })
    },
    Users: {
      screen: Users,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <IoniconsComponent name="ios-people" size={30} color={tintColor} />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <IoniconsComponent name="ios-contact" size={30} color={tintColor} />
        )
      })
    }
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
    Tags: {
      screen: Tags,
      navigationOptions: {
        title: 'Tags'
      }
    },
    ...AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
export default createAppContainer(Stack);
