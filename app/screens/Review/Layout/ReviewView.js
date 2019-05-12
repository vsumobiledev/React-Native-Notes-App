import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import NavigationService from '../../../navigation/NavigationService';
import AddTag from '../../../shared/components/AddTag';
import Tag from '../../../shared/components/Tag';
import CancelableTag from '../../../shared/components/CancelableTag';
import Fieldset from '../../../shared/components/Fieldset';
import Button from '../../../shared/components/Button';
import RatingModal from '../RatingModal';
import PropTypes from 'prop-types';
import styles from './styles';
import AppStyles from '../../../config/styles';

class ReviewView extends Component {
  state = {
    isEdit: false,
    description: '',
    tags: [],
    authorRating: false,
    isInvalid: false,
    isModalVisible: false
  };

  componentDidMount() {
    const {
      state: {
        params: { id }
      }
    } = this.props.navigation;

    this.props.preloadReview(id);
  }

  onChangeDescription = value => {
    this.setState({ description: value, isInvalid: false });
  };
  onAddTagClick = () => {
    NavigationService.navigate('Tags', { selectTag: this.selectTag });
  };

  selectTag = tag => {
    const { tags } = this.state;

    if (tags.findIndex(item => item.name === tag.name) === -1) {
      tags.push(tag);
      this.setState({ tags });
    }
  };

  deselectTag = value => {
    const { tags } = this.state;
    tags.splice(tags.findIndex(tag => tag.name === value), 1);
    this.setState({ tags, isInvalid: false });
  };

  onRatingChange = authorRating => {
    this.setState({ authorRating, isInvalid: false });
  };

  renderSelectedTags = tags => {
    if (tags) {
      const { isEdit } = this.state;
      return tags.map(tag =>
        isEdit ? (
          <CancelableTag
            key={tag.name}
            name={tag.name}
            color={tag.color}
            onClick={this.deselectTag}
          />
        ) : (
          <View key={tag.name} style={styles.tag}>
            <Tag {...tag} />
          </View>
        )
      );
    }
  };

  deleteReview = () => {
    const {
      state: {
        params: { id }
      }
    } = this.props.navigation;
    Alert.alert(
      'Delete',
      'Are you sure you want to delete review?',
      [
        {
          text: 'Cancel'
        },
        { text: 'Yes', onPress: () => this.props.deleteReview(id) }
      ],
      { cancelable: false }
    );
  };

  editReview = () => {
    const {
      review: { description, tags, authorRating }
    } = this.props;
    this.setState({
      description,
      tags,
      authorRating,
      isEdit: true
    });
  };

  saveReview = () => {
    const { description, authorRating, tags } = this.state;
    const { review } = this.props;
    if (description && authorRating && tags.length > 0) {
      review.description = description;
      review.authorRating = authorRating;
      review.tags = tags;
      this.props.saveReview(review);
      this.setState({
        isEdit: false
      });
    } else {
      this.setState({ isInvalid: true });
    }
  };

  openModal = () => {
    this.setState({
      isModalVisible: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalVisible: false
    });
  };

  render() {
    const { isInvalid, isEdit, description, isModalVisible } = this.state;
    const { review, userRating, isLoading, uid } = this.props;
    return (
      <ScrollView>
        {!isLoading && review ? (
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <Image style={styles.addImage} source={{ uri: review.image }} />

              <View style={styles.ratingBlock}>
                <Text style={styles.title}>Author Rating</Text>
                <AirbnbRating
                  count={5}
                  defaultRating={review.authorRating}
                  size={isEdit ? 30 : 20}
                  showRating={false}
                  onFinishRating={this.onRatingChange}
                  isDisabled={!isEdit}
                />
                <Text style={styles.title}>User Rating</Text>
                <AirbnbRating
                  count={5}
                  defaultRating={userRating}
                  size={20}
                  showRating={false}
                  onFinishRating={this.onRatingChange}
                  isDisabled={true}
                />
                <Text style={styles.title}>Tags</Text>
                <View style={styles.tagsContainer}>
                  {this.renderSelectedTags(review.tags)}
                  {isEdit && <AddTag onClick={this.onAddTagClick} />}
                </View>
              </View>
            </View>
            <View style={styles.authorContainer}>
              <Text style={styles.title}>Review author: </Text>
              <Text>{review.author}</Text>
            </View>
            {isEdit ? (
              <Fieldset
                onChangeText={this.onChangeDescription}
                textValue={description}
                placeholder="Enter description..."
                title="Description"
                isMultiline={true}
              />
            ) : (
              <View>
                <Text style={styles.title}>Description</Text>
                <Text>{review.description}</Text>
              </View>
            )}

            {isInvalid && (
              <Text style={styles.error}>Please, fulfill all fields!</Text>
            )}
            <RatingModal
              closeModal={this.closeModal}
              isModalVisible={isModalVisible}
              bookId={review.bookId}
            />
            {review.authorId === uid ? (
              <View style={styles.btnContainer}>
                <View style={styles.button}>
                  <Button
                    text={isEdit ? 'Save' : 'Edit'}
                    onClick={isEdit ? this.saveReview : this.editReview}
                    isLoading={isLoading}
                    colorStart={
                      !isEdit ? AppStyles.color.YELLOW : AppStyles.color.GREEN
                    }
                    colorEnd={
                      !isEdit ? AppStyles.color.GRAY : AppStyles.color.GRAY
                    }
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    text="Delete"
                    onClick={this.deleteReview}
                    isLoading={isLoading}
                    colorStart={AppStyles.color.GRAY}
                    colorEnd={AppStyles.color.RED}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.btnContainer}>
                <Button
                  text="Rate this book"
                  onClick={this.openModal}
                  isLoading={isLoading}
                  colorStart={AppStyles.color.DARK_GREEN}
                  colorEnd={AppStyles.color.YELLOW}
                />
              </View>
            )}
          </View>
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={AppStyles.color.MAIN_COLOR} />
          </View>
        )}
      </ScrollView>
    );
  }
}

ReviewView.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
    author: PropTypes.string,
    authorRating: PropTypes.number,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string
      })
    )
  }),
  userRating: PropTypes.number,
  isLoading: PropTypes.bool,
  saveReview: PropTypes.func,
  preloadReview: PropTypes.func,
  deleteReview: PropTypes.func,
  uid: PropTypes.string,
  navigation: PropTypes.object
};

export default ReviewView;
