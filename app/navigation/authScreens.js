import AuthLoading from '../screens/AuthLoading/Layout';
import Login from '../screens/Login/Layout';
import Register from '../screens/Register/Layout';
import AppStyles from '../config/styles';

const optionsHeaderless = { header: null, gesturesEnabled: false };
const AuthStack = {
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
        backgroundColor: AppStyles.color.DARK_WHITE
      }
    }
  }
};
export default AuthStack;
