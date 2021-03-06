import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderColor: AppStyles.rgba.BLACK_04,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    marginBottom: 5,
    marginTop: 10,
    width: '100%'
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8
  },
  input: {
    alignSelf: 'stretch',
    padding: 1,
    width: '80%'
  }
});

export default styles;
