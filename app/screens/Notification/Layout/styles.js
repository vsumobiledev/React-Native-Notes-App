import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  deleteButton: {
    backgroundColor: AppStyles.color.RED,
    height: '100%',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0
  },
  deleteButtonText: {
    color: AppStyles.color.RED
  },
  noNotif: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
