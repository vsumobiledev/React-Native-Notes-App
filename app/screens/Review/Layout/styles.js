import { StyleSheet } from 'react-native';
import AppStyles from '../../../config/styles';

export const styles = StyleSheet.create({
  addImage: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 275,
    width: '45%',
    overflow: 'hidden'
  },
  authorContainer: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bookCover: {
    paddingTop: 1,
    width: '100%',
    height: '100%'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
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
  loading: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratingBlock: {
    width: '55%',
    alignItems: 'center'
  },
  tag: {
    margin: 1,
    marginLeft: 5,
    marginRight: 5
  },
  title: {
    fontWeight: 'bold'
  },
  tagsContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
