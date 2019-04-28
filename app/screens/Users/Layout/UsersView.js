import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import SearchField from '../../../shared/components/SearchField/index';
import UserItem from '../UserItem/index';
import styles from './styles';
import PropTypes from 'prop-types';

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
      <View style={styles.container}>
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
            <ActivityIndicator size="large" color="green" />
          </View>
        )}
      </View>
    );
  }
}

ProfileView.propTypes = {
  navigation: PropTypes.object,
  initUsers: PropTypes.func,
  isLoading: PropTypes.isLoading,
  users: PropTypes.array,
  userUid: PropTypes.string
};

export default ProfileView;
