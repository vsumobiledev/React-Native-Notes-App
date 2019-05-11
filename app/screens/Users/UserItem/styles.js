import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '96%',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: AppStyles.color.GRAY,
    margin: 2,
    marginLeft: '2%',
    backgroundColor: AppStyles.color.WHITE,
    shadowColor: AppStyles.color.BLACK,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1
  },
  avatarWrapper: {
    borderRadius: 100,
    overflow: 'hidden'
  },
  avatar: {
    height: 50,
    width: 50
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
  dataWrapper: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%'
  }
});

export default styles;
