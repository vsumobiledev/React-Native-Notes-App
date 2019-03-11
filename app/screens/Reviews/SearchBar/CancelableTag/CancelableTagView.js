import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Tag from '../../../../shared/component/Tag';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import StyleSheetFactory from './styles';

class CancelableTagView extends React.Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheetFactory.getSheet(props.color);
    }
    onPress = () => {
        const { value, onClick } = this.props;
        onClick(value);
    }
    render() {
        const { value, color, onClick } = this.props;
        return (
            <TouchableOpacity onPress={onClick}>    
                <View style={this.styles.container}>
                    <Tag value={value} color={color}/>
                    <IoniconsComponent style={this.styles.icon} name='ios-close' size={20} />
                </View>
            </TouchableOpacity>
            
        );
    }
}
CancelableTagView.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default CancelableTagView;
