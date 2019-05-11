import { StyleSheet } from 'react-native';
import AppStyles from '../../../../config/styles';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  flatList: {
    paddingTop: 10,
    paddingBottom: 150,
    backgroundColor: AppStyles.color.DARK_WHITE
  },
  item: {
    alignSelf: 'center'
  },
  loading: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
