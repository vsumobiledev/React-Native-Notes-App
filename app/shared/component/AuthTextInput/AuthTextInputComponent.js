import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

class AuthTextInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
    }
    render() {
        return (
            <TextInput
                style={{
                    ...styles.input,
                    ...(this.state.focus ? styles.inputFocus : {})
                }}
                onChangeText={this.props.onChangeText}
                onFocus={() => this.setState({ focus: true })}
                onBlur={() => this.setState({ focus: false })}
                placeholder={this.props.placeholder}
                placeholderTextColor="#ADADAD"
                selectionColor="black"
                value={this.state.login}
                secureTextEntry={this.props.type === 'password'}
            />
        );
    }
}

AuthTextInputComponent.propTypes = {
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

export default AuthTextInputComponent;
