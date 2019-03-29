import React, { Component } from 'react';
import { Alert, View, Text, Image, FlatList } from 'react-native';
import MenuRowComponent from '../MenuRow/MenuRowComponent';
import ProfileCardComponent from '../../../shared/components/ProfileCard/index';
import styles from './styles';
import PropTypes from 'prop-types';

class ProfileView extends Component {
  constructor(props) {
    super(props);
  }
  menuItems = [
    {
      icon: 'ios-build',
      text: 'Edit Profile',
      onPress: () => {
        this.props.navigation.navigate('EditProfile');
      }
    },
    {
      icon: 'ios-alert',
      text: 'Notification',
      onPress: () => {
        this.props.navigation.navigate('Notification');
      }
    }
  ];
  logOut = () => {
    Alert.alert(
      'Logout ',
      'Do you really want to leave?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => this.props.logout() }
      ],
      { cancelable: false }
    );
  };
  componentDidMount() {
    this.props.navigation.setParams({ logOut: this.logOut });
    if (this.props.user && this.props.user.role === 'admin') {
      this.menuItems.push({
        icon: 'ios-pricetags',
        text: 'Tags',
        onPress: () => {
          this.props.navigation.navigate('Tags');
        }
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.user ? (
          <ProfileCardComponent user={this.props.user}></ProfileCardComponent>
        ) : null}
        <View style={styles.menu}>
          <FlatList
            data={this.menuItems}
            keyExtractor={(item, index) => `profileMenu${index}`}
            renderItem={({ item, index }) => (
              <MenuRowComponent data={item} index={index} />
            )}
          />
        </View>
      </View>
    );
  }
}

ProfileView.propTypes = {
  navigation: PropTypes.object,
  logout: PropTypes.func,
  isLoading: PropTypes.bool,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    uid: PropTypes.string,
    avatar: PropTypes.string,
    role: PropTypes.bool
  })
};

export default ProfileView;
