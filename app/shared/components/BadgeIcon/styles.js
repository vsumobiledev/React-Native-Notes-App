import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {},
  badge: {
    position: 'absolute',
    right: -10,
    top: 0,
    backgroundColor: AppStyles.color.RED,
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: AppStyles.color.WHITE,
    fontSize: 12
  }
});

export default styles;
