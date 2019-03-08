/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        width: 100,
        height: 100
    },
    logoWrapper: {
        marginBottom: 40
    },
    subHeader: {
        marginBottom: 30
    },
    register: {
        color: '#A8A8A8',
        margin: 5
    },
    login: {
        width: '50%',
        backgroundColor: '#00FF44',
        borderRadius: 50,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    loginText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    loading: {
        marginBottom: 30
    }
});
