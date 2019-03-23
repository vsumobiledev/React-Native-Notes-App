import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/Layout';
import ReviewsList from '../ReviewsList/Layout';
import styles from './styles';

class ReviewsView extends Component {
  constructor(props) {
    super(props);
  }
  logout = () => {
    this.props.logout();
  };
  render() {
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <SearchBar />
        <ReviewsList />
      </SafeAreaView>
    );
  }
}

ReviewsView.propTypes = {
  loadReviews: PropTypes.func,
  logout: PropTypes.func
};

export default ReviewsView;
