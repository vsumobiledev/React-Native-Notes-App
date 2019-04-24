
import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    margin: 3,
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: '3%',
    width: '95%',
    overflow: 'hidden',
    backgroundColor: AppStyles.color.WHITE,
    borderColor: AppStyles.color.LIGHT_GRAY,
    flexDirection: 'row'
  },
  tagName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 4,
    maxWidth: '86%'
  },
  tagColor: {
    width: 35,
    height: 35,
    borderRadius: 50
  },
  buttons: {
    marginRight: 10,
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    margin: 7,
    color: AppStyles.color.BLUE
  },
  spacer: {
    flex: 1
  },
  delButton: {
    color: AppStyles.color.RED
  }
});

export default styles;
