import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class TagItem extends Component {
  deleteTag = () => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete ${this.props.data.name} tag?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => this.props.deleteTag(this.props.data) }
      ],
      { cancelable: false }
    );
  };
  editTag = () => {
    this.props.modalEditTag(this.props.data);
  };
  seletTag = () => {
    if (this.props.selectTag) {
      this.props.selectTag({
        name: this.props.data.name,
        color: this.props.data.color
      });
      this.props.navigation.goBack();
    }
  };
  render() {
    return (
      <TouchableOpacity onPress={this.seletTag} style={styles.container}>
        <View
          style={{
            ...styles.tagColor,
            backgroundColor: this.props.data.color
          }}
        />
        <Text style={styles.tagName} numberOfLines={1}>
          {this.props.data.name}
        </Text>
        <View style={styles.spacer} />
        <View style={styles.buttons}>
          {this.props.isAdmin ? (
            <TouchableOpacity onPress={this.deleteTag}>
              <Text style={[styles.button, styles.delButton]}>Delete</Text>
            </TouchableOpacity>
          ) : null}
          {this.props.isAdmin ? (
            <TouchableOpacity onPress={this.editTag}>
              <Text style={styles.button}>Edit</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}

TagItem.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string
  }),
  isAdmin: PropTypes.bool,
  selectTag: PropTypes.func,
  index: PropTypes.number,
  navigation: PropTypes.object,
  deleteTag: PropTypes.func,
  modalEditTag: PropTypes.func
};

export default TagItem;
