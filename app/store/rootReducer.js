import addReviewReducer from '../screens/AddReview/Layout/reducer';
import authLoadingReducer from '../screens/AuthLoading/Layout/reducer';
import loginReducer from '../screens/Login/Layout/reducer';
import registerReducer from '../screens/Register/Layout/reducer';
import reviewReducer from '../screens/Review/Layout/reducer';
import reviewModalReducer from '../screens/Review/RatingModal/reducer';
import reviewsListReducer from 'app/screens/Reviews/ReviewsList/Layout/reducer';
import userReducer from '../core/redux/user/reducer';
import tagsReducer from '../screens/Tags/Layout/reducer';
import usersReducer from '../screens/Users/Layout/reducer';
import userDetailReducer from '../screens/UserDetail/Layout/reducer';
import notificationsReducer from '../core/redux/notifications/reducer';

const rootReducer = {
  addReview: addReviewReducer,
  authLoading: authLoadingReducer,
  login: loginReducer,
  register: registerReducer,
  review: reviewReducer,
  reviewModal: reviewModalReducer,
  reviewsList: reviewsListReducer,
  user: userReducer,
  tags: tagsReducer,
  users: usersReducer,
  userDetail: userDetailReducer,
  notifications: notificationsReducer
};

export default rootReducer;
