import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList, Alert } from 'react-native';
import TagItem from '../TagItem/index';
import Fab from '../../../shared/components/Fab/index';
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
  createNewTag = () => {
    Alert.alert('create', 'create');
  };
  getTagsData = () => {
    return Object.keys(this.props.tags).map(key => {
      const item = this.props.tags[key];
      return {
        ...item,
        key
      };
    });
  };
  render() {
    const { isAdmin, selectTag } = this.props.navigation.state.params
      ? this.props.navigation.state.params
      : { isAdmin: false, selectTag: null };
    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#FFFF00"
          />
        ) : null}
        <View style={styles.tagsList}>
          <FlatList
            data={this.getTagsData()}
            keyExtractor={(item, index) => `tagitem${index}`}
            renderItem={({ item, index }) => (
              <TagItem
                data={item}
                index={index}
                isAdmin={isAdmin}
                selectTag={selectTag}
                navigation={this.props.navigation}
              />
            )}
          />
        </View>
        {isAdmin ? <Fab onPress={this.createNewTag} bottom={20} /> : null}
      </View>
    );
  }
}

TagsView.propTypes = {
  isLoading: PropTypes.bool,
  initTags: PropTypes.func,
  tags: PropTypes.object,
  navigation: PropTypes.object
};

export default TagsView;
