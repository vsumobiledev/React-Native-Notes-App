import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Tag from '../../../../shared/component/Tag';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class AddTagView extends React.Component {
    render() {
        const { onClick } = this.props;
        return (
            <TouchableOpacity onPress={onClick}>    
                <View style={styles.container}>
                    <IoniconsComponent style={styles.icon} name='ios-add' size={20} />
                    <Tag value="Add tag" color="white"/>
                </View>
            </TouchableOpacity>  
        );
    }
}
AddTagView.propTypes = {
    onClick: PropTypes.func,
};

export default AddTagView;
