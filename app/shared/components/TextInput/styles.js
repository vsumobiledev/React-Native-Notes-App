import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

export const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: AppStyles.color.TRANSPARENT,
    borderColor: AppStyles.color.LIGHT_BLACK,
    borderBottomWidth: 2,
    width: '100%',
    margin: 5,
    marginTop: 0,
    paddingLeft: 5,
    paddingRight: 5
  },
  inputFocus: {
    borderColor: AppStyles.color.LIGHT_GREEN
  }
});
