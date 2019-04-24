import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Ripple from 'react-native-material-ripple';
import TextInputComponent from '../../../shared/components/TextInput/TextInputComponent';
import { styles } from './styles';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';

class RegistrationView extends React.Component {
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
    this.props.register(
      {
        login: this.state.login,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      },
      this.state.password
    );
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
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color={AppStyles.color.YELLOW}
          />
        ) : null}
        <View style={styles.inputsWrapper}>
          <TextInputComponent
            onChangeText={this.onFirstNameChangeText}
            placeholder="Enter first name..."
          />
          <TextInputComponent
            onChangeText={this.onLastNameChangeText}
            placeholder="Enter last name..."
          />
          <TextInputComponent
            onChangeText={this.onEmailChangeText}
            placeholder="Enter email..."
          />
          <TextInputComponent
            onChangeText={this.onPasswordChangeText}
            placeholder="Enter password..."
            type="password"
          />
        </View>
        <Ripple
          rippleContainerBorderRadius={50}
          style={styles.register}
          onPress={this.register}
        >
          <Text style={styles.registerText}>REGISTER</Text>
        </Ripple>
      </View>
    );
  }
}

RegistrationView.propTypes = {
  isLoading: PropTypes.bool,
  register: PropTypes.func
};

export default RegistrationView;
