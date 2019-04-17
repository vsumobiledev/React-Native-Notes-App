/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 10
  },
  titleContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginBottom: -10,
    marginLeft: 10,
    zIndex: 2
  },
  title: {
    fontWeight: 'bold'
  },
  hintsLoader: {
    position: 'absolute',
    top: 25,
    right: 5
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  focusedInput: {
    borderColor: '#2b5aa6',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  }
});

export default styles;
