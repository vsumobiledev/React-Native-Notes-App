import Reviews from 'app/screens/Reviews/Layout';
import AddReview from 'app/screens/AddReview/Layout';
import { createStackNavigator } from 'react-navigation';

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

const optionsHeaderless = { header: null, gesturesEnabled: false };

const ReviewsStack = createStackNavigator({
  Reviews: {
    screen: Reviews,
    navigationOptions: optionsHeaderless
  },
  AddReview: {
    screen: AddReview,
    navigationOptions: {
      title: 'Add review'
    }
  }
});

ReviewsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
export default ReviewsStack;
