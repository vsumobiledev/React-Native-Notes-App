import homeReducer from '../screens/Home/Layout/reducer';
import authLoadingReducer from '../screens/AuthLoading/Layout/reducer';
import loginReducer from '../screens/Login/Layout/reducer';
import registerReducer from '../screens/Register/Layout/reducer';

const rootReducer = {
    home: homeReducer,
    authLoading: authLoadingReducer,
    login: loginReducer,
    register: registerReducer
};
export default rootReducer;