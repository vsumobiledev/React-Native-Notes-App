import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class EditProfileView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Edit Profile</Text>
            </View>
        );
    }
}

export default EditProfileView;
