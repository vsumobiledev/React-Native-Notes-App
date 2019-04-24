import { StyleSheet, Platform } from 'react-native';
import AppStyles from '../../../config/styles';

export const styles = StyleSheet.create({
  avatar: {
    height: 150,
    width: 150
  },
  avatarWrapper: {
    borderRadius: 100,
    overflow: 'hidden'
  },
  nameText: {
    color: AppStyles.color.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: AppStyles.color.DARK_WHITE,
    borderRadius: 10,
    elevation: Platform.OS === 'ios' ? 1 : 8,
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    shadowColor: AppStyles.color.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1.0
  },
  subTitleText: {
    textAlign: 'center'
  }
});
