import { StyleSheet, Dimensions } from 'react-native';
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
    marginTop: Dimensions.get('screen').height / 2 - 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
