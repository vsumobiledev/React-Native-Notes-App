import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchFieldWrapper: {
    width: '98%',
    marginLeft: '1%',
    borderBottomWidth: 0.5,
    borderBottomColor: AppStyles.color.GRAY
  },
  usersList: {
    width: '100%',
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerList: {
    paddingTop: 5,
    paddingBottom: 100
  }
});

export default styles;
