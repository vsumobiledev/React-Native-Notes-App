
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
    alignItems: 'center',
    flex: 1,
    marginTop: 20
  },
  dataWrapper: {
    alignItems: 'center',
    marginTop: 15
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
  menu: {
    marginTop: 10,
    width: '100%'
  },
  nameText: {
    color: AppStyles.color.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitleText: {
    textAlign: 'center'
  }
});

export default styles;
