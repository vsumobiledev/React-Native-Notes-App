/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

export default class StyleSheetFactory {
  static getSheet(tagColor) {
    return StyleSheet.create({
      container: {
        backgroundColor: tagColor,
        borderRadius: 15,
        paddingLeft: 4,
        paddingRight: 5
      },
      text: {
        color: 'white' === tagColor ? 'black' : 'white',
        alignSelf: 'center',
        paddingBottom: 2
      }
    });
  }
}
