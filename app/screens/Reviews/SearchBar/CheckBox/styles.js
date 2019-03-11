import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
    static getSheet(isCheck) {
        return StyleSheet.create({
            container: {
                height: 24,
                width: 24,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
            },
            check: {
                height: 15,
                width: 15,
                borderRadius: 5,
                backgroundColor: isCheck ? '#000' : '#FFF',
            }
        });
    }
}
