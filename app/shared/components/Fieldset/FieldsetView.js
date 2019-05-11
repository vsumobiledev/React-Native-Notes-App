import React from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import AppStyles from '../../../config/styles';

class FieldsetView extends React.PureComponent {
  state = {
    isFocused: false
  };

  onFocus = () => {
    this.setState({
      isFocused: true
    });
  };

  onBlur = () => {
    this.setState({
      isFocused: false
    });
  };

  render() {
    const { isFocused } = this.state;
    const {
      onChangeText,
      textValue,
      title,
      isMultiline,
      placeholder,
      withHints,
      isLoadingHints,
      type
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TextInput
          style={[!isFocused ? styles.input : styles.focusedInput]}
          placeholder={placeholder}
          placeholderTextColor={AppStyles.rgba.BLACK_04}
          onChangeText={onChangeText}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={textValue}
          multiline={isMultiline}
          secureTextEntry={type === 'password'}
        />
        {withHints && isLoadingHints && (
          <ActivityIndicator
            size="small"
            color="blue"
            style={styles.hintsLoader}
          />
        )}
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
  withHints: PropTypes.bool,
  isLoadingHints: PropTypes.bool,
  hintsData: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSelectBook: PropTypes.func,
  type: PropTypes.string
};

export default FieldsetView;
