import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class MenuRowComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.data.onPress()}>
                <View
                    style={{
                        ...styles.menuRow,
                        ...(this.props.index === 0 ? (styles.menuRowTop) : null)
                    }}
                >
                    <IoniconsComponent name={this.props.data.icon} style={styles.menuIcon} size={30} color="black" />
                    <Text style={styles.menuText}>{this.props.data.text}</Text>
                    <IoniconsComponent
                        name="ios-arrow-forward"
                        style={styles.menuArrowIcon}
                        size={30}
                        color="rgba(0, 0, 0, 0.3)"
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

MenuRowComponent.propTypes = {
    data: PropTypes.shape({
        icon: PropTypes.string,
        onPress: PropTypes.func,
        text: PropTypes.string
    }),
    index: PropTypes.number
};

export default MenuRowComponent;
