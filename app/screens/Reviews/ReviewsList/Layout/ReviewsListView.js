import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import ListItem from '../ListItem';
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
            <TouchableOpacity onPress={this.onPressAdd} style={styles.fab}>
              <IoniconsComponent
                style={styles.fabIcon}
                color="white"
                name="ios-add"
                size={36}
              />
            </TouchableOpacity>
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
