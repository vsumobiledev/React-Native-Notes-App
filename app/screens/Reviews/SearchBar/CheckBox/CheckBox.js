import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import StyleSheetFactory from './styles';

const CheckBox = ({ isCheck }) => {  
    const styles = StyleSheetFactory.getSheet(isCheck);
    return (
        <View style={styles.container}>
            <View style={styles.check} />
        </View>
    );
};

CheckBox.propTypes = {
    isCheck: PropTypes.bool
};

export default CheckBox;