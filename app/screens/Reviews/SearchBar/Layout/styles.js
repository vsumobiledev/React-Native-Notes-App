import { StyleSheet } from 'react-native';
import AppStyles from '../../../../config/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.3,
    borderColor: AppStyles.rgba.BLACK_04
  },
  searchFieldWrapper: {
    width: '83%'
  },
  searchBar: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10
  },
  filterBtn: {
    width: '17%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  }
});

export default styles;
