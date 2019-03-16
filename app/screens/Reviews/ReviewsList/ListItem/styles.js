import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  author: {
    fontStyle: 'italic'
  },
  container: {
    height: 275,
    borderWidth: 1,
    borderColor: 'gray',
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
    justifyContent: 'space-between'
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
    marginLeft: 5,
    marginRight: 5
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default styles;
