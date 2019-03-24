import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class TagItem extends React.Component {
  deleteTag = () => {
    Alert.alert('delete', 'test');
  };
  editTag = () => {
    Alert.alert('edit', 'test');

  };
  seletTag = () => {
    this.props.selectTag({
      value: this.props.data.name,
      color: this.props.data.color
    });
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            ...styles.tagColor,
            backgroundColor: this.props.data.color
          }}
        />
        <Text style={styles.tagName}>{this.props.data.name}</Text>
        <View style={styles.spacer}></View>
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
          {this.props.selectTag ? (
            <TouchableOpacity onPress={this.seletTag}>
              <Text style={styles.button}>Add</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
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
  navigation: PropTypes.object
};

export default TagItem;
