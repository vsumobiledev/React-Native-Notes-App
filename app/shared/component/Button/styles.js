import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    margin: 2,
    alignSelf: 'center'
  },
  gradient: {
    padding: 12,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: AppStyles.color.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
    width: '100%',
    textAlign: 'center'
  }
});

export default styles;
