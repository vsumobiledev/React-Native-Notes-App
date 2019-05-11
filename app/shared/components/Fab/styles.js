import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: AppStyles.color.MAIN_COLOR,
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fabIcon: {
    height: 36
  }
});

export default styles;
