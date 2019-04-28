import Users from '../screens/Users/Layout/index';
import UserDetail from '../screens/UserDetail/Layout/index';
import { createStackNavigator } from 'react-navigation';

/* eslint-disable react-native/no-inline-styles */

const optionsHeaderless = { header: null, gesturesEnabled: false };

const UsersStack = createStackNavigator({
  Users: {
    screen: Users,
    navigationOptions: optionsHeaderless
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => {
      console.log(navigation);
      const { user } = navigation.state.params;
      return { title: `${user.firstName} ${user.lastName}` };
    }
  }
});

export default UsersStack;
