import { StyleSheet } from 'react-native';
import tinycolor from 'tinycolor2';
import AppStyles from '../../../config/styles';

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
          tinycolor(tagColor).getBrightness() < 200
            ? AppStyles.color.WHITE
            : AppStyles.color.BLACK,
        alignSelf: 'center',
        paddingBottom: 2
      }
    });
  }
}
