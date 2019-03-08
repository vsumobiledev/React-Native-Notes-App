import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, TouchableOpacity, ActivityIndicator } from 'react-native';
import AuthTextInputComponent from '../../../shared/component/AuthTextInput/AuthTextInputComponent';
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
        this.props.login(this.state.login, this.state.password);
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
                {this.props.isLoading ? (
                    <ActivityIndicator style={styles.loading} size="large" color="#FFFF00" />
                ) : null}
                <AuthTextInputComponent
                    onChangeText={value => this.setState({ login: value })}
                    placeholder="Enter login..."
                />
                <AuthTextInputComponent
                    onChangeText={value => this.setState({ password: value })}
                    placeholder="Enter password..."
                    type="password"
                />
                <TouchableNativeFeedback onPress={this.login}>
                    <View style={styles.login}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.register}>Create Account</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

LoginView.propTypes = {
    isLoading: PropTypes.bool,
    login: PropTypes.func,
    navigation: {
        navigate: PropTypes.func
    }
};

export default LoginView;
