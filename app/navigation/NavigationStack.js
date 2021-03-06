/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import BadgeIcon from '../shared/components/BadgeIcon/index';
import ReviewsStack from './reviewsScreens';
import UsersStack from './usersScreens';
import Tags from '../screens/Tags/Layout';
import AuthStack from './authScreens';
import ProfileStack from './profileScreens';
import AppStyles from '../config/styles';

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
      screen: UsersStack,
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
          <BadgeIcon name="ios-contact" size={30} color={tintColor} />
        )
      })
    }
  },
  {
    initialRouteName: 'Reviews',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: AppStyles.color.TINT_COLOR,
      inactiveTintColor: AppStyles.color.DARK_GRAY,
      style: {
        height: 50
      }
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
