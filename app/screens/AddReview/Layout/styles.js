/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  addImage: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 275,
    color: 'rgba(0, 0, 0, 0.3)',
    width: '45%',
    overflow: 'hidden'
  },
  title: {
    fontWeight: 'bold'
  },
  ratingBlock: {
    width: '55%',
    alignItems: 'center'
  },
  infoContainer: {
    flexDirection: 'row'
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  bookCover: {
    paddingTop: 1,
    width: '100%',
    height: '100%'
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
