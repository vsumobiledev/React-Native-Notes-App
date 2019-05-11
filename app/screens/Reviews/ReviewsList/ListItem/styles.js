import { StyleSheet } from 'react-native';
import AppStyles from '../../../../config/styles';

const styles = StyleSheet.create({
  author: {
    fontStyle: 'italic'
  },
  container: {
    borderColor: AppStyles.color.GRAY,
    borderWidth: 1,
    height: 275,
    shadowColor: AppStyles.color.BLACK,
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
    backgroundColor: AppStyles.color.WHITE
  },
  bookCover: {
    paddingTop: '80%',
    width: '45%'
  },
  ratingContainer: {
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
  description: {
    maxHeight: 80,
    overflow: 'hidden'
  }
});

export default styles;
