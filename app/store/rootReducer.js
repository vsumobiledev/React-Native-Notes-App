import authLoadingReducer from '../screens/AuthLoading/Layout/reducer';
import loginReducer from '../screens/Login/Layout/reducer';
import registerReducer from '../screens/Register/Layout/reducer';
import reviewsListReducer from '../screens/Reviews/ReviewsList/Layout/reducer';
import reviewsReducer from '../screens/Reviews/Layout/reducer';
import userReducer from '../core/redux/user/reducer';
import tagsReducer from '../screens/Tags/Layout/reducer';

const rootReducer = {
  authLoading: authLoadingReducer,
  login: loginReducer,
  register: registerReducer,
  review: reviewsReducer,
  reviewsList: reviewsListReducer,
  user: userReducer,
  tags: tagsReducer
};

export default rootReducer;
