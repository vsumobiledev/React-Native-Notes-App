import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: 'rgba(40, 40, 40, 1)',
        borderBottomWidth: 0.3,
        padding: 5
    },
    btnText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },    
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBoxText: {
        marginLeft: 5
    }
});

export default styles;
