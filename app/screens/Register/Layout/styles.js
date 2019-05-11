import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
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
  button: {
    width: '50%'
  },
  subHeader: {
    marginBottom: 30
  }
});

export default styles;
