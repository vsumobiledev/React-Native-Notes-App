import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import NavigationService from '../../../../navigation/NavigationService';
import Ripple from 'react-native-material-ripple';
import Tag from '../../../../shared/components/Tag';
import styles from './styles';

class ListItemView extends React.PureComponent {
  renderTags = tags =>
    tags.map(tag => (
      <View key={tag.name} style={styles.tag}>
        <Tag {...tag} />
      </View>
    ));
  onPress = () => {
    const { id, title } = this.props;
    NavigationService.navigate('Review', { title, id });
  };

  render() {
    const {
      image,
      title,
      author,
      authorRating,
      description,
      userRating,
      tags
    } = this.props;
    return (
      <View style={styles.button}>
        <Ripple
          rippleContainerBorderRadius={10}
          elevation={5}
          style={styles.container}
          onPress={this.onPress}
        >
          <Image style={styles.bookCover} source={{ uri: image }} />
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
            <Text>{description}</Text>
          </View>
        </Ripple>
      </View>
    );
  }
}

ListItemView.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  author: PropTypes.string,
  authorRating: PropTypes.number,
  description: PropTypes.string,
  userRating: PropTypes.number,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.string
    })
  ),
  id: PropTypes.string
};

export default ListItemView;
