import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class TagsView extends Component {
  constructor(props) {
    super(props);
    this.initTags();
  }
  initTags = () => {
    this.props.initTags();
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#FFFF00"
          />
        ) : null}
        <Text>{JSON.stringify(this.props.tags)}</Text>
      </View>
    );
  }
}

TagsView.propTypes = {
  isLoading: PropTypes.bool,
  initTags: PropTypes.func,
  tags: PropTypes.object
};

export default TagsView;
