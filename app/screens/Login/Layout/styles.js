import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: AppStyles.color.WHITE,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15
  },
  inputsWrapper: {
    width: '50%'
  },

  logo: {
    height: 100,
    width: 100
  },
  logoWrapper: {
    marginBottom: 40
  },
  register: {
    color: AppStyles.color.DARK_GRAY,
    margin: 5
  },
  subHeader: {
    marginBottom: 30
  },
  button: {
    width: '50%'
  }
});

export default styles;
