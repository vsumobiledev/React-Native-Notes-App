/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 3,
    borderRadius: 10,
    borderWidth: 1,
    width: '80%',
    justifyContent: 'center',
    minWidth: 200,
    maxWidth: 400,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderColor: '#d1d1d1',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 20,
    minHeight: 300,
    shadowColor: 'black',
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
    color: 'black'
  },
  save: {
    alignItems: 'center',
    backgroundColor: '#00FF44',
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    width: '50%'
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  saveWrapper: {
    marginTop: 25,
    width: '100%',
    alignItems: 'center'
  }
});

export default styles;
