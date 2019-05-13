import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import TagItem from '../TagItem/index';
import Fab from '../../../shared/components/Fab/index';
import CreateTagModal from '../CreateTagModal/index';
import styles from './styles';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';

class TagsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      mode: 'save',
      oldTag: null
    };
    this.initTags();
  }
  initTags = () => {
    this.props.initTags();
  };
  createNewTag = () => {
    this.setState({ modalVisible: true });
  };
  modalEditTag = tag => {
    this.setState({
      modalVisible: true,
      mode: 'edit',
      oldTag: tag
    });
  };
  editTag = tag => {
    if (this.state.oldTag !== null) {
      this.props.editTag(this.state.oldTag.name, tag);
      this.setState({ oldTag: null });
    }
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
  closeModal = () => {
    this.setState({ modalVisible: false, mode: 'save', oldTag: null });
  };
  render() {
    const { isAdmin, selectTag } = this.props.navigation.state.params
      ? this.props.navigation.state.params
      : { isAdmin: false, selectTag: null };
    const { deleteTag } = this.props;
    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color={AppStyles.color.THIRD_COLOR}
          />
        ) : null}
        <View style={styles.tagsList}>
          <FlatList
            data={this.getTagsData()}
            keyExtractor={(item, index) => `tagitem${index}`}
            contentContainerStyle={styles.containerList}
            renderItem={({ item, index }) => (
              <TagItem
                data={item}
                index={index}
                isAdmin={isAdmin}
                selectTag={selectTag}
                deleteTag={deleteTag}
                navigation={this.props.navigation}
                modalEditTag={this.modalEditTag}
              />
            )}
          />
        </View>
        {isAdmin ? (
          <CreateTagModal
            closeModal={this.closeModal}
            modalVisible={this.state.modalVisible}
            mode={this.state.mode}
            addTag={this.props.addTag}
            editTag={this.editTag}
            oldTag={this.state.oldTag}
          />
        ) : null}
        {isAdmin ? <Fab onPress={this.createNewTag} bottom={20} /> : null}
      </View>
    );
  }
}

TagsView.propTypes = {
  isLoading: PropTypes.bool,
  initTags: PropTypes.func,
  tags: PropTypes.object,
  navigation: PropTypes.object,
  addTag: PropTypes.func,
  deleteTag: PropTypes.func,
  editTag: PropTypes.func
};

export default TagsView;
