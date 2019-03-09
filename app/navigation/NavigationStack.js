/* eslint-disable react/display-name */
import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';

import AuthLoading from '../screens/AuthLoading/Layout';
import Login from '../screens/Login/Layout';
import Register from '../screens/Register/Layout';
import Reviews from 'app/screens/Reviews/Layout';
import Profile from 'app/screens/Profile/Layout';
import Users from 'app/screens/Users/Layout';

const Tab = createBottomTabNavigator(
    {
        Reviews: {
            screen: Reviews,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (<IoniconsComponent name='ios-paper' size={30} color={tintColor} />)
            })
        },
        Users: {
            screen: Users,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (<IoniconsComponent name='ios-people' size={30} color={tintColor} />)
            })
        },
        Profile: {
            screen: Profile,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (<IoniconsComponent name='ios-contact' size={30} color={tintColor} />)
            })
        }
    },
    {
        initialRouteName: 'Reviews',
        tabBarOptions: {
            showLabel: false
        }
    }
);
const Stack = createStackNavigator(
    {
        Tab: {
            screen: Tab,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        AuthLoading: {
            screen: AuthLoading,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
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
