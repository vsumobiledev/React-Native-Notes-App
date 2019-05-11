import { StyleSheet, Platform } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 10
  },
  titleContainer: {
    backgroundColor: AppStyles.color.WHITE,
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
    top: Platform.OS === 'ios' ? 18 : 25,
    right: 5
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingTop: 10
  },
  focusedInput: {
    borderColor: AppStyles.color.DARK_BLUE,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingTop: 10
  }
});

export default styles;
