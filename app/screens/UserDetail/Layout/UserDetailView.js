import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class ProfileView extends Component {

  render() {
    const user = this.props.navigation.getParam('user', {});
    return (
      <View style={styles.container}>
        <Text>{user.uid}</Text>
      </View>
    );
  }
}

ProfileView.propTypes = {
  navigation: PropTypes.object,
};

export default ProfileView;
