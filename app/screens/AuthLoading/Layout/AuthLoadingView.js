import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

class AuthLoadingView extends React.Component {
    constructor(props) {
        super(props);
        this.checkState();
    }

    checkState = () => {
        this.props.initAuth();
    };

    render() {
        return (
            <View style={styles.container}>
                {this.props.isLoading ? <ActivityIndicator size="large" color="green" /> : null}
            </View>
        );
    }
}

AuthLoadingView.propTypes = {
    isLoading: PropTypes.bool,
    initAuth: PropTypes.func
};

export default AuthLoadingView;
