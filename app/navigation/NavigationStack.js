import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home/Layout';
import AuthLoading from '../screens/AuthLoading/Layout';
import Login from '../screens/Login/Layout';
import Register from '../screens/Register/Layout';

const RNApp = createStackNavigator(
    {
        Home: {
            screen: Home,
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

export default createAppContainer(RNApp);
