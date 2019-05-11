import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  addImage: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 275,
    color: AppStyles.rgba.BLACK_03,
    width: '45%',
    overflow: 'hidden'
  },
  addNotIamge: {
    borderWidth: 2,
    borderStyle: 'dashed'
  },
  bookCover: {
    paddingTop: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    margin: 10
  },
  chooseBtn: {
    marginBottom: 10
  },
  error: {
    color: AppStyles.color.RED,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  infoContainer: {
    flexDirection: 'row'
  },
  ratingBlock: {
    width: '55%',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
