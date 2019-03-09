import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ProfileView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Users</Text>
            </View>
        );
    }
}

export default ProfileView;
