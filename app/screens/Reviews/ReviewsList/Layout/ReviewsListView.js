import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ActivityIndicator } from 'react-native';
import ListItem from '../ListItem';
import Fab from '../../../../shared/components/Fab';
import NavigationService from '../../../../navigation/NavigationService';
import styles from './styles';

class ReviewsListView extends React.Component {
  state = {};
  componentDidMount() {
    this.props.loadFilteredReviews();
  }
  onPressAdd = () => {
    NavigationService.navigate('Tags');
  };
  renderItem = ({ item }) => <ListItem {...item} />;
  render() {
    const { reviews, isLoading } = this.props;
    return (
      <View style={styles.container}>
        {!isLoading && reviews ? (
          <View>
            <FlatList
              contentContainerStyle={styles.flatList}
              data={reviews}
              renderItem={this.renderItem}
            />
            <Fab onPress={this.onPressAdd} bottom={140} />
          </View>
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
  isLoading: PropTypes.bool,
  loadFilteredReviews: PropTypes.func,
  reviews: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};

export default ReviewsListView;
