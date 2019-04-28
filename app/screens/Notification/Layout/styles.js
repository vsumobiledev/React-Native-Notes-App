import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  deleteButton: {
    backgroundColor: 'red',
    height: '100%',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0
  },
  deleteButtonText: {
    color: '#fff'
  }
});

export default styles;
