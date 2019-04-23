/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import tinycolor from 'tinycolor2';

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
        color:
          tinycolor(tagColor).getBrightness() < 200 ? '#ffffff' : '#000000',
        alignSelf: 'center',
        paddingBottom: 2
      }
    });
  }
}
