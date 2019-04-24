import { StyleSheet } from 'react-native';
import AppStyles from '../../../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: AppStyles.color.LIGHT_BLACK,
    padding: 5
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkBoxText: {
    marginLeft: 5
  }
});

export default styles;
