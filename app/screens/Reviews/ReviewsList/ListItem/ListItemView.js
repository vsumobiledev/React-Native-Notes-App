import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

class ListItemView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.author}</Text>
        <Text>{this.props.authorRating}</Text>
        <Text>{this.props.discription}</Text>
        <Text>{this.props.userRating}</Text>
      </View>
    );
  }
}

ListItemView.propTypes = {
  searchName: PropTypes.string
};

export default ListItemView;
