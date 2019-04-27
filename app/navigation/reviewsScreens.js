import Reviews from 'app/screens/Reviews/Layout';
import AddReview from 'app/screens/AddReview/Layout';
import Review from 'app/screens/Review/Layout';
import { createStackNavigator } from 'react-navigation';

/* eslint-disable react-native/no-inline-styles */

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
  },
  Review: {
    screen: Review,
    navigationOptions: ({ navigation }) => {
      const {
        state: { params }
      } = navigation;
      return { title: params.title };
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
