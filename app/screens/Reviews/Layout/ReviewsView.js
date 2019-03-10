import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/Layout';
import styles from './styles';

class ReviewsView extends Component {
    constructor(props) {
        super(props);
    }
    logout = () => {
        this.props.logout();
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchBar/>
                <View style={{ flex: 1, alignItems: 'stretch' }}> 
                    <TouchableOpacity onPress={this.logout}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

ReviewsView.propTypes = {
    loadReviews: PropTypes.func,
    logout: PropTypes.func
};

export default ReviewsView;
