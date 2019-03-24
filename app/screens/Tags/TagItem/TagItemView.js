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
          {this.props.addTag ? (
            <TouchableOpacity onPress={() => this.props.addTag(this.props.data)}>
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
  addTag: PropTypes.func,
  index: PropTypes.number
};

export default TagItem;
