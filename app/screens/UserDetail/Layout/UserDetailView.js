import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ProfileCard from '../../../shared/components/ProfileCard/index';
import Button from '../../../shared/component/Button/index';
import styles from './styles';
import PropTypes from 'prop-types';

class ProfileView extends Component {
  componentDidMount() {
    const uid = this.props.navigation.getParam('uid', {});
    this.props.initUser(uid);
  }
  subscribe = () => {
    const { user } = this.props;
    const isSubscribed = !!Object.keys(user.subscribers).find(
      uid => uid === this.props.userUid
    );
    this.props.subscribeUser(this.props.userUid, user.uid, isSubscribed);
  };
  deleteUser = () => {
    this.props.deleteUser(this.props.user.uid);
    this.props.navigation.goBack();
  };
  getSubscribeData = user => {
    const isSubscribed = !!Object.keys(user.subscribers).find(
      uid => uid === this.props.userUid
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
          <View>
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
              {this.props.role === 'admin' ? (
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

ProfileView.propTypes = {
  navigation: PropTypes.object,
  role: PropTypes.string,
  userUid: PropTypes.string,
  subscribeUser: PropTypes.func,
  deleteUser: PropTypes.func,
  initUser: PropTypes.func,
  isDataLoading: PropTypes.bool,
  user: PropTypes.object
};

export default ProfileView;
