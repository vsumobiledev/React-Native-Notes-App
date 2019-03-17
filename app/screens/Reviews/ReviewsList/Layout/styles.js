import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  flatList: {
    paddingTop: 10,
    paddingBottom: 140,
    backgroundColor: '#f2f2f2'
  },
  item: {
    alignSelf: 'center'
  },
  fab: {
    position: 'absolute',
    bottom: 140,
    right: 10,
    // borderWidth: 1,
    backgroundColor: '#2BA699',
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
