import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }
  onFocus = () => {
    this.setState({ focus: true });
  };
  onBlur = () => {
    this.setState({ focus: false });
  };
  render() {
    return (
      <TextInput
        style={{
          ...styles.input,
          ...(this.state.focus ? styles.inputFocus : {})
        }}
        onChangeText={this.props.onChangeText}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        placeholder={this.props.placeholder}
        placeholderTextColor={AppStyles.color.GRAY}
        selectionColor="black"
        value={this.props.value}
        secureTextEntry={this.props.type === 'password'}
      />
    );
  }
}

TextInputComponent.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default TextInputComponent;
