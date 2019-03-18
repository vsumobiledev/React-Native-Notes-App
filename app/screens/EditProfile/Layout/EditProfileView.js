import React, { Component } from 'react';
import { View, Image, Text, TouchableNativeFeedback, ScrollView } from 'react-native';
import TextInputComponent from '../../../shared/components/TextInput/TextInputComponent';
import styles from './styles';
import PropTypes from 'prop-types';

class EditProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user ? props.user.firstName : null,
            lastName: props.user ? props.user.lastName : null
        };
    }
    save = () => {
        if (this.state.firstName && this.state.lastName) {
            this.props.saveUser({
                ...this.props.user,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            });
            this.props.navigation.goBack();
        }
    };
    changeAvatar = () => {};
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.props.user ? (
                        <View>
                            <TouchableNativeFeedback onPress={this.changeAvatar}>
                                <View style={styles.avatarWrapper}>
                                    {this.props.isAvatarLoading ? null : this.props.avatar ? (
                                        <Image style={styles.avatar} source={{ uri: this.props.avatar }} />
                                    ) : (
                                        <Image
                                            style={styles.avatar}
                                            source={require('../../../assets/images/default-avatar.png')}
                                        />
                                    )}
                                </View>
                            </TouchableNativeFeedback>
                            <View style={styles.dataWrapper}>
                                <TextInputComponent
                                    onChangeText={value => this.setState({ firstName: value })}
                                    placeholder="First Name..."
                                    value={this.state.firstName}
                                />
                                <TextInputComponent
                                    onChangeText={value => this.setState({ lastName: value })}
                                    placeholder="Last Name..."
                                    value={this.state.lastName}
                                />
                            </View>
                        </View>
                    ) : null}
                    <TouchableNativeFeedback onPress={this.save}>
                        <View style={styles.login}>
                            <Text style={styles.loginText}>SAVE</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        );
    }
}

EditProfileView.propTypes = {
    navigation: PropTypes.object,
    isLoading: PropTypes.bool,
    save: PropTypes.func,
    saveUser: PropTypes.func,
    avatar: PropTypes.string,
    isAvatarLoading: PropTypes.bool,
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        uid: PropTypes.string
    })
};

export default EditProfileView;
