import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Ripple from 'react-native-material-ripple';
import TextInputComponent from '../../../shared/components/TextInput/TextInputComponent';
import { styles } from './styles';
import PropTypes from 'prop-types';

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
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#FFFF00"
          />
        ) : null}
        <View style={styles.inputsWrapper}>
          <TextInputComponent
            onChangeText={value => this.setState({ firstName: value })}
            placeholder="Enter first name..."
          />
          <TextInputComponent
            onChangeText={value => this.setState({ lastName: value })}
            placeholder="Enter last name..."
          />
          <TextInputComponent
            onChangeText={value => this.setState({ login: value })}
            placeholder="Enter email..."
          />
          <TextInputComponent
            onChangeText={value => this.setState({ password: value })}
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
