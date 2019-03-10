import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class NotificationView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Notification</Text>
            </View>
        );
    }
}

export default NotificationView;
