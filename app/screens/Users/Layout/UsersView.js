import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import SearchField from '../../../shared/components/SearchField/index';
import UserItem from '../UserItem/index';
import styles from './styles';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onSearchChange = value => {
    this.setState({ search: value });
  };

  openUserDetail = uid => {
    const user = this.props.users[uid];
    this.props.navigation.navigate('UserDetail', {
      uid,
      title: `${user.firstName} ${user.lastName}`
    });
  };

  getData = () => {
    const users = this.props.users;
    delete users[this.props.userUid];
    let data = Object.keys(users);
    if (this.state.search) {
      return data.filter(
        key =>
          !!`${users[key].firstName} ${users[key].lastName}`
            .toLowerCase()
            .match(this.state.search.toLowerCase())
      );
    }
    return data;
  };

  componentDidMount() {
    this.props.initUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View style={styles.searchFieldWrapper}>
          <SearchField
            placeholder="Search..."
            value={this.state.search}
            onChange={this.onSearchChange}
          />
        </View>
        {!this.props.isLoading ? (
          <View style={styles.usersList}>
            <FlatList
              data={this.getData()}
              keyExtractor={item => `user${item}`}
              contentContainerStyle={styles.containerList}
              renderItem={({ item }) => (
                <UserItem
                  data={users[item]}
                  openUserDetail={this.openUserDetail}
                />
              )}
            />
          </View>
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator
              size="large"
              color={AppStyles.color.THIRD_COLOR}
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

ProfileView.propTypes = {
  navigation: PropTypes.object,
  initUsers: PropTypes.func,
  isLoading: PropTypes.bool,
  users: PropTypes.object,
  userUid: PropTypes.string
};

export default ProfileView;
