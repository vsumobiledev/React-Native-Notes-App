import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    height: '90%',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '80%'
  },
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
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1
  },
  closeButton: {
    marginRight: 10,
    marginLeft: 10
  },
  title: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default styles;
