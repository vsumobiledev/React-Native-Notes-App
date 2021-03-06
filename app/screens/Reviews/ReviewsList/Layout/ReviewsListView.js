import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';
import AppStyles from '../../../../config/styles';

class ReviewsListView extends Component {
  state = {};
  componentDidMount() {
    this.props.loadFilteredReviews();
  }

  renderItem = ({ item }) => {
    return <ListItem id={item.key} {...item} />;
  };
  render() {
    const { reviews, isLoading } = this.props;
    return (
      <View style={styles.container}>
        {!isLoading ? (
          <View>
            {reviews && (
              <FlatList
                contentContainerStyle={styles.flatList}
                data={reviews}
                renderItem={this.renderItem}
              />
            )}
          </View>
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator
              size="large"
              color={AppStyles.color.THIRD_COLOR}
            />
          </View>
        )}
      </View>
    );
  }
}

ReviewsListView.propTypes = {
  isLoading: PropTypes.bool,
  loadFilteredReviews: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};

export default ReviewsListView;
