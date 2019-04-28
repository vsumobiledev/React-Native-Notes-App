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
    this.props.navigation.navigate('UserDetail', {
      user: this.props.users[uid]
    });
  };

  getData = () => {
    if (this.state.search) {
      const { users } = this.props;
      return Object.keys(this.props.users).filter(
        key =>
          !!`${users[key].firstName} ${users[key].lastName}`
            .toLowerCase()
            .match(this.state.search.toLowerCase())
      );
    }
    return Object.keys(this.props.users);
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
  users: PropTypes.array
};

export default ProfileView;
