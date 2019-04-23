import addReviewReducer from '../screens/AddReview/Layout/reducer';
import authLoadingReducer from '../screens/AuthLoading/Layout/reducer';
import loginReducer from '../screens/Login/Layout/reducer';
import registerReducer from '../screens/Register/Layout/reducer';
import reviewsListReducer from 'app/screens/Reviews/ReviewsList/Layout/reducer';
import userReducer from '../core/redux/user/reducer';
import tagsReducer from '../screens/Tags/Layout/reducer';

const rootReducer = {
  addReview: addReviewReducer,
  authLoading: authLoadingReducer,
  login: loginReducer,
  register: registerReducer,
  reviewsList: reviewsListReducer,
  user: userReducer,
  tags: tagsReducer
};

export default rootReducer;
