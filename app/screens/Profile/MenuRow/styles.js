
import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  menuArrowIcon: {
    marginRight: 15
  },
  menuIcon: {
    marginLeft: 15
  },
  menuRow: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: AppStyles.rgba.BLACK_03,
    flexDirection: 'row',
    height: 40,
    width: '100%'
  },
  menuRowTop: {
    borderTopWidth: 1
  },
  menuText: {
    color: AppStyles.color.BLACK,
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  }
});

export default styles;
