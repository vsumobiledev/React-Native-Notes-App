import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: AppStyles.color.WHITE,
    flex: 1,
    justifyContent: 'center',
    marginTop: -40
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  inputsWrapper: {
    width: '50%'
  },
  loading: {
    margin: 30
  },
  register: {
    alignItems: 'center',
    backgroundColor: AppStyles.color.LIGHT_GREEN,
    borderRadius: 50,
    color: AppStyles.color.DARK_WHITE,
    height: 40,
    justifyContent: 'center',
    margin: 5,
    marginTop: 15,
    width: '50%'
  },
  registerText: {
    color: AppStyles.color.WHITE,
    fontWeight: 'bold'
  },
  subHeader: {
    marginBottom: 30
  }
});
