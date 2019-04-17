/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  addImage: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 275,
    color: 'rgba(0, 0, 0, 0.3)',
    width: '45%',
    overflow: 'hidden'
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
    color: 'red',
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
