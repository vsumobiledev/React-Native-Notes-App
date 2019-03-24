/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 3,
    borderRadius: 50,
    width: '95%',
    marginLeft: '3%',
    borderWidth: 0.5,
    borderColor: '#d1d1d1',
    flexDirection: 'row'
  },
  tagName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
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
    justifyContent: 'space-between',
  },
  button: {
    margin: 5,
    color: '#009dff'
  },
  spacer: {
    flex: 1
  },
  delButton: {
    color: 'red'
  }
});

export default styles;
