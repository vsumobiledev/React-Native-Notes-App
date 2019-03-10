/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        height: 150,
        width: 150
    },
    avatarWrapper: {
        borderRadius: 100,
        overflow: 'hidden'
    },
    container: {
        alignItems: 'center',
        flex: 1
    },
    dataWrapper: {
        marginTop: 15
    },
    menu: {
        marginTop: 10,
        width: '100%'
    },
    nameText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    profileCard: {
        alignItems: 'center',
        backgroundColor: '#fafafa',
        borderRadius: 10,
        elevation: 8,
        justifyContent: 'center',
        marginTop: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1.0
    },
    subTitleText: {
        textAlign: 'center'
    }
});

export default styles;
