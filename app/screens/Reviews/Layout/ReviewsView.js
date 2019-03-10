import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class ReviewsView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Reviews</Text>
                <TouchableOpacity onPress={this.stubOnPress}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

ReviewsView.propTypes = {
    loadReviews: PropTypes.func,
};

export default ReviewsView;
