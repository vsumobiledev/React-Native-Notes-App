import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  avatar: {
    height: 150,
    width: 150
  },
  avatarWrapper: {
    borderRadius: 100,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  dataWrapper: {
    marginTop: 15
  },
  nameText: {
    color: AppStyles.color.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitleText: {
    textAlign: 'center'
  },
  button: {
    width: '43%'
  }
});

export default styles;
