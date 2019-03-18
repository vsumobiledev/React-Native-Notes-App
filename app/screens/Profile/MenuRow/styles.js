/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuArrowIcon: {
        marginRight: 15
    },
    menuIcon: {
        marginLeft: 15
    },
    menuRow: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        flexDirection: 'row',
        height: 40,
        width: '100%'
    },
    menuRowTop: {
        borderTopWidth: 1
    },
    menuText: {
        color: 'black',
        flex: 1,
        fontSize: 16,
        marginLeft: 10
    }
});

export default styles;
