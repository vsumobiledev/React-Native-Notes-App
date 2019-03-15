import React, { Component } from 'react';
import { View } from 'react-native';
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
      <View style={styles.container}>
        <SearchBar />
        <ReviewsList />
      </View>
    );
  }
}

ReviewsView.propTypes = {
  loadReviews: PropTypes.func,
  logout: PropTypes.func
};

export default ReviewsView;
