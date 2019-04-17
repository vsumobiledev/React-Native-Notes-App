import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  book: {
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 1
  },
  bookIcon: {
    marginRight: 5,
    marginLeft: 5,
    width: 22,
    height: 32
  },
  text: {
    alignSelf: 'center'
  },
  flex: {
    flexDirection: 'row'
  }
});

export default styles;
