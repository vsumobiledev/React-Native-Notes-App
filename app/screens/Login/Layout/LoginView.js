import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';
import Button from '../../../shared/components/Button';
import Fieldset from '../../../shared/components/Fieldset';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }
  login = () => {
    this.props.login(this.state.login.trim(), this.state.password);
  };
  onEmailChangeText = value => {
    this.setState({ login: value });
  };
  onPasswordChangeText = value => {
    this.setState({ password: value });
  };
  openRegister = () => {
    this.props.navigation.navigate('Register');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../../assets/images/book-logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.inputsWrapper}>
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
            text="LOGIN"
            onClick={this.login}
            isLoading={this.props.isLoading}
            colorStart={AppStyles.color.MAIN_COLOR}
            colorEnd={AppStyles.color.MAIN_COLOR}
          />
        </View>
        <TouchableOpacity onPress={this.openRegister}>
          <Text style={styles.register}>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginView.propTypes = {
  isLoading: PropTypes.bool,
  login: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

export default LoginView;
