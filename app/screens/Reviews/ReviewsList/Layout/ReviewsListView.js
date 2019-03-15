import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';

class ReviewsListView extends React.Component {
  state = {};
  componentDidMount() {
    this.props.loadFilteredReviews();
  }
  renderItem = ({ item }) => <ListItem {...item} />;
  render() {
    const { reviews, isLoading } = this.props;
    return (
      <View style={styles.container}>
        {!isLoading && reviews ? (
          <FlatList
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 140 }}
            data={reviews}
            renderItem={this.renderItem}
          />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="green" />
          </View>
        )}
      </View>
    );
  }
}

ReviewsListView.propTypes = {
  searchName: PropTypes.string,
  loadFilteredReviews: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};

export default ReviewsListView;
