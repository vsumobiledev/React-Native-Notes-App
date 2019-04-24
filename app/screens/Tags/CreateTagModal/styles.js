
import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    margin: 3,
    borderRadius: 10,
    borderWidth: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    maxWidth: 400,
    overflow: 'hidden',
    backgroundColor: AppStyles.color.WHITE,
    borderColor: AppStyles.color.LIGHT_GRAY,
    flexDirection: 'row',
    padding: 10,
    minHeight: 300,
    zIndex: 10,
    shadowColor: AppStyles.color.BLACK,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 1
  },
  modalBackground: {
    height: '100%',
    width: '100%',
    backgroundColor: AppStyles.rgba.BLACK_05,
    zIndex: 0,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  sliderRow: {
    width: '100%'
  },
  inputs: {
    width: '80%'
  },
  inputTitle: {
    fontWeight: 'bold',
    color: AppStyles.color.BLACK
  },
  save: {
    alignItems: 'center',
    backgroundColor: AppStyles.color.LIGHT_GREEN,
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    width: '50%'
  },
  saveText: {
    color: AppStyles.color.WHITE,
    fontWeight: 'bold'
  },
  saveWrapper: {
    marginTop: 25,
    width: '100%',
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 8
  }
});

export default styles;
