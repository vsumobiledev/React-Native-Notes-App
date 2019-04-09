import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class FieldsetView extends React.PureComponent {
  state = {
    isFocused: false
  };
  onBlur = () => {
    this.setState({ isFocused: false });
  };
  onFocus = () => {
    this.setState({ isFocused: true });
  };

  render() {
    const { isFocused } = this.state;
    const {
      onChangeText,
      textValue,
      title,
      isMultiline,
      placeholder,
      withHints
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TextInput
          style={[
            !isFocused ? styles.input : styles.focusedInput,
            withHints && { paddingRight: 15 }
          ]}
          placeholder={placeholder}
          placeholderTextColor="rgba(0,0,0,0.4)"
          onChangeText={onChangeText}
          value={textValue}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          multiline={isMultiline}
        />
      </View>
    );
  }
}

FieldsetView.propTypes = {
  onChangeText: PropTypes.func,
  textValue: PropTypes.string,
  title: PropTypes.string,
  isMultiline: PropTypes.bool,
  placeholder: PropTypes.string,
  withHints: PropTypes.bool
};

export default FieldsetView;
