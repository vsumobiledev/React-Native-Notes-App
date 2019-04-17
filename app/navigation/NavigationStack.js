/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ReviewsStack from './reviewsScreens';
import Users from 'app/screens/Users/Layout';
import Tags from '../screens/Tags/Layout';
import AuthStack from './authScreens';
import ProfileStack from './profileScreens';

const Tab = createBottomTabNavigator(
  {
    Reviews: {
      screen: ReviewsStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-paper" size={30} color={tintColor} />
        )
      })
    },
    Users: {
      screen: Users,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-people" size={30} color={tintColor} />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-contact" size={30} color={tintColor} />
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
