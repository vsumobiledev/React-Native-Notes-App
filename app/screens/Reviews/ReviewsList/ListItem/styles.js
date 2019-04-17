/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  author: {
    fontStyle: 'italic'
  },
  container: {
    borderColor: '#cecece',
    borderWidth: 1,
    height: 275,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 8,
    shadowOpacity: 1,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  bookCover: {
    paddingTop: '80%',
    width: '45%'
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  bookText: {
    paddingLeft: 5,
    paddingTop: 5,
    width: '55%'
  },
  tagsContainer: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5
  },
  tag: {
    margin: 1,
    marginLeft: 5,
    marginRight: 5
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10
  },
  discription: {
    maxHeight: 80,
    overflow: 'hidden'
  }
});

export default styles;
