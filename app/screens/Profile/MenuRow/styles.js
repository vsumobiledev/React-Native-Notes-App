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
    borderBottomWidth: 0.5,
    borderColor: AppStyles.rgba.BLACK_03,
    flexDirection: 'row',
    height: 40,
    width: '100%'
  },
  menuRowTop: {
    borderTopWidth: 0.5
  },
  menuText: {
    color: AppStyles.color.BLACK,
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  },
  badge: {
    borderRadius: 25,
    width: 25,
    height: 25,
    padding: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.RED,
    overflow: 'hidden'
  },
  badgeText: {
    color: AppStyles.color.WHITE,
    fontWeight: 'bold'
  }
});

export default styles;
