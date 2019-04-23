import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
  static getSheet(tagColor) {
    return StyleSheet.create({
      container: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: tagColor,
        borderRadius: 15,
        paddingRight: 5
      },
      icon: {
        marginTop: 1
      }
    });
  }
}
