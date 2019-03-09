/* eslint-disable react/display-name */
import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';

import Reviews from 'app/screens/Reviews/Layout';
import Profile from 'app/screens/Profile/Layout';
import Users from 'app/screens/Users/Layout';

const RNApp = createBottomTabNavigator(
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
        tabBarOptions: {
            showLabel: false
        }
    }
);

export default createAppContainer(RNApp);
