
import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

export const styles = StyleSheet.create({
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
  loading: {
    marginBottom: 30
  },
  login: {
    alignItems: 'center',
    backgroundColor: AppStyles.color.LIGHT_GREEN,
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    marginTop: 15,
    width: '50%'
  },
  loginText: {
    color: AppStyles.color.WHITE,
    fontWeight: 'bold'
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
  }
});
