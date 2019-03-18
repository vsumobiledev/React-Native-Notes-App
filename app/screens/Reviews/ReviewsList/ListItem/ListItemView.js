import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import NavigationService from '../../../../navigation/NavigationService';
import Tag from '../../../../shared/component/Tag';
import styles from './styles';

class ListItemView extends React.PureComponent {
  renderTags = tags =>
    tags.map(tag => (
      <View key={tag.value} style={styles.tag}>
        <Tag {...tag} />
      </View>
    ));
  onPress = () => {
    NavigationService.navigate('Tags');
  };
  render() {
    const {
      imageURL,
      title,
      author,
      authorRating,
      discription,
      userRating,
      tags
    } = this.props;
    return (
      <TouchableNativeFeedback style={styles.button} onPress={this.onPress}>
        <View elevation={5} style={styles.container}>
          <Image style={styles.bookCover} source={{ uri: imageURL }} />
          <View style={styles.bookText}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.ratingContainer}>
              <Text>Author rating</Text>
              <AirbnbRating
                count={5}
                defaultRating={authorRating}
                size={14}
                showRating={false}
                isDisabled={true}
              />
            </View>
            <View style={styles.ratingContainer}>
              <Text>User rating</Text>
              <AirbnbRating
                count={5}
                defaultRating={userRating}
                size={14}
                showRating={false}
                isDisabled={true}
              />
            </View>
            <Text>
              Review author: <Text style={styles.author}>{author}</Text>
            </Text>
            <View style={styles.tagsContainer}>
              <Text>Tags: </Text>
              {this.renderTags(tags)}
            </View>
            <Text>{discription}...</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

ListItemView.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  author: PropTypes.string,
  authorRating: PropTypes.number,
  discription: PropTypes.string,
  userRating: PropTypes.number,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.string
    })
  )
};

export default ListItemView;
