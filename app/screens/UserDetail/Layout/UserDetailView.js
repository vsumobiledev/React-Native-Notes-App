import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ProfileCard from '../../../shared/components/ProfileCard/index';
import Button from '../../../shared/components/Button/index';
import styles from './styles';
import PropTypes from 'prop-types';

class UserDetailView extends Component {
  componentDidMount() {
    const uid = this.props.navigation.getParam('uid', {});
    this.props.initUser(uid);
  }
  subscribe = () => {
    const { user } = this.props;
    const isSubscribed = !!Object.keys(user.subscribers).find(
      uid => uid === this.props.profile.uid
    );
    this.props.subscribeUser(this.props.profile, user.uid, isSubscribed);
  };
  deleteUser = () => {
    this.props.deleteUser(this.props.user.uid);
    this.props.navigation.goBack();
  };
  getSubscribeData = user => {
    const isSubscribed = !!Object.keys(user.subscribers).find(
      uid => uid === this.props.profile.uid
    );
    const count = Object.keys(user.subscribers).length;
    return {
      text: isSubscribed ? `SUBSCRIBED ${count}` : `SUBSCRIBE ${count}`,
      isSubscribed
    };
  };
  render() {
    const { user } = this.props;
    const subData = user ? this.getSubscribeData(user) : {};
    return (
      <View style={styles.container}>
        {this.props.isDataLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="green" />
          </View>
        ) : (
          <View>
            <View style={styles.profileCardWrapper}>
              <ProfileCard user={user} />
            </View>
            <View style={styles.buttonsWrapper}>
              <Button
                text={subData.text}
                colorStart={subData.isSubscribed ? 'lightgrey' : 'red'}
                colorEnd={subData.isSubscribed ? 'lightgrey' : 'darkred'}
                onClick={this.subscribe}
              />
              {this.props.profile && this.props.profile.role === 'admin' ? (
                <Button
                  text="DELETE"
                  colorStart="red"
                  colorEnd="darkred"
                  onClick={this.deleteUser}
                />
              ) : null}
            </View>
          </View>
        )}
      </View>
    );
  }
}

UserDetailView.propTypes = {
  navigation: PropTypes.object,
  profile: PropTypes.object,
  subscribeUser: PropTypes.func,
  deleteUser: PropTypes.func,
  initUser: PropTypes.func,
  isDataLoading: PropTypes.bool,
  user: PropTypes.object
};

export default UserDetailView;
