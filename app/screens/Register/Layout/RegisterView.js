import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';
import Button from '../../../shared/components/Button';
import Fieldset from '../../../shared/components/Fieldset';

class RegistrationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  }
  register = () => {
    if (this.state.firstName.length < 3 || this.state.lastName.length < 3) {
      Alert.alert('Register Error', 'The name must be longer than 3');
    } else {
      this.props.register(
        {
          login: this.state.login,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        },
        this.state.password
      );
    }
  };
  onFirstNameChangeText = value => {
    this.setState({ firstName: value });
  };
  onLastNameChangeText = value => {
    this.setState({ lastName: value });
  };
  onEmailChangeText = value => {
    this.setState({ login: value });
  };
  onPasswordChangeText = value => {
    this.setState({ password: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputsWrapper}>
          <Fieldset
            onChangeText={this.onFirstNameChangeText}
            textValue={this.state.firstName}
            placeholder="Enter first name..."
            title="Firstname"
            isMultiline={false}
          />
          <Fieldset
            onChangeText={this.onLastNameChangeText}
            textValue={this.state.lastName}
            placeholder="Enter last name..."
            title="Lastname"
            isMultiline={false}
          />
          <Fieldset
            onChangeText={this.onEmailChangeText}
            textValue={this.state.login}
            placeholder="Enter email..."
            title="Login"
            isMultiline={false}
          />
          <Fieldset
            onChangeText={this.onPasswordChangeText}
            textValue={this.state.password}
            placeholder="Enter password..."
            title="Password"
            isMultiline={false}
            type="password"
          />
        </View>
        <View style={styles.button}>
          <Button
            text="REGISTER"
            onClick={this.register}
            isLoading={this.props.isLoading}
            colorStart={AppStyles.color.MAIN_COLOR}
            colorEnd={AppStyles.color.MAIN_COLOR}
          />
        </View>
      </View>
    );
  }
}

RegistrationView.propTypes = {
  isLoading: PropTypes.bool,
  register: PropTypes.func
};

export default RegistrationView;
