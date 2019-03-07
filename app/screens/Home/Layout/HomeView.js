import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity onPress={this.props.loadReviews}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

HomeView.propTypes = {
    loadReviews: PropTypes.func,
};

export default HomeView;
