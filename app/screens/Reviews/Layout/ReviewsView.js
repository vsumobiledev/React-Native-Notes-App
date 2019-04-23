import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/Layout';
import ReviewsList from '../ReviewsList/Layout';
import Fab from '../../../shared/components/Fab';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

class ReviewsView extends Component {
  constructor(props) {
    super(props);
  }
  onPressAdd = () => {
    NavigationService.navigate('AddReview');
  };
  render() {
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <SearchBar />
        <ReviewsList />
        <Fab onPress={this.onPressAdd} />
      </SafeAreaView>
    );
  }
}

ReviewsView.propTypes = {
  loadReviews: PropTypes.func,
  logout: PropTypes.func
};

export default ReviewsView;
