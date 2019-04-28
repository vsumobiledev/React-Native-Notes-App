/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'black',
    borderTopWidth: 0,
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black'
  },
  subTitle: {},
  date: {
    marginTop: 5,
    fontSize: 12
  },
  dataWrapper: {
    marginLeft: 15
  }
});

export default styles;
