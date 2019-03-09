/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    subHeader: {
        marginBottom: 30
    },
    register: {
        color: '#e8e8e8',
        margin: 5,
        marginTop: 15,
        width: '50%',
        backgroundColor: '#00FF44',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    registerText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    loading: {
        margin: 30
    }
});
