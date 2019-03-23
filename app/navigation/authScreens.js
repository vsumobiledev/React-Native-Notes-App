import AuthLoading from '../screens/AuthLoading/Layout';
import Login from '../screens/Login/Layout';
import Register from '../screens/Register/Layout';

const optionsHeaderless = { header: null, gesturesEnabled: false };
const ProfileStack = {
  AuthLoading: {
    screen: AuthLoading,
    navigationOptions: optionsHeaderless
  },
  Login: {
    screen: Login,
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
};
export default ProfileStack;
