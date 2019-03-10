import React from 'react';
import { Text, View, TouchableNativeFeedback, ActivityIndicator } from 'react-native';
import AuthTextInputComponent from '../../../shared/component/AuthTextInput/AuthTextInputComponent';
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
                    <ActivityIndicator style={styles.loading} size="large" color="#FFFF00" />
                ) : null}
                <AuthTextInputComponent
                    onChangeText={value => this.setState({ firstName: value })}
                    placeholder="Enter first name..."
                />
                <AuthTextInputComponent
                    onChangeText={value => this.setState({ lastName: value })}
                    placeholder="Enter last name..."
                />
                <AuthTextInputComponent
                    onChangeText={value => this.setState({ login: value })}
                    placeholder="Enter email..."
                />
                <AuthTextInputComponent
                    onChangeText={value => this.setState({ password: value })}
                    placeholder="Enter password..."
                    type="password"
                />
                <TouchableNativeFeedback onPress={this.register}>
                    <View style={styles.register}>
                        <Text style={styles.registerText}>REGISTER</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

RegistrationView.propTypes = {
    isLoading: PropTypes.bool,
    register: PropTypes.func
};

export default RegistrationView;
