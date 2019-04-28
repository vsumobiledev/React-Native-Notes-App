import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchFieldWrapper: {
    width: '98%',
    marginLeft: '1%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },
  usersList: {
    width: '100%',
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
