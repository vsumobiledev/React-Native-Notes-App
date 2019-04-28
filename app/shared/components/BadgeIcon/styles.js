import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  badge: {
    position: 'absolute',
    right: -10,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: {
    color: '#fff',
    fontSize: 12
  }
});

export default styles;
