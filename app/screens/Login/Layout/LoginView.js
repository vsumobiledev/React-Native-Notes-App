import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import TextInputComponent from '../../../shared/components/TextInput/TextInputComponent';
import { styles } from './styles';
import PropTypes from 'prop-types';

class LoginView extends React.Component {
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
  }
  onPasswordChangeText = value => {
    this.setState({ password: value });
  }
  openRegister = () => {
    this.props.navigation.navigate('Register');
  }
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
        {this.props.isLoading ? (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color="#FFFF00"
          />
        ) : null}
        <View style={styles.inputsWrapper}>
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
          style={styles.login}
          onPress={this.login}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </Ripple>
        <TouchableOpacity
          onPress={this.openRegister}
        >
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
