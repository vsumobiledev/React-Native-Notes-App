import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import NavigationService from '../../../navigation/NavigationService';
import AddTag from '../../../shared/component/AddTag';
import CancelableTag from '../../../shared/component/CancelableTag';
import Fieldset from '../../../shared/component/Fieldset';
import Button from '../../../shared/component/Button';
import PropTypes from 'prop-types';
import { styles } from './styles';

class AddReviewView extends React.Component {
  state = {
    title: '',
    discription: '',
    authorRating: 0,
    tags: [
      {
        color: '#50655b',
        name: 'Crime and Detective'
      },
      {
        name: 'Anthology',
        color: '#fe2da3'
      }
    ],
    imageURL: false,
    isInvalid: false
  };
  onChangeTitle = value => {
    this.setState({ title: value, isInvalid: false });
  };
  onChangeDiscription = value => {
    this.setState({ discription: value, isInvalid: false });
  };
  onAddTagClick = () => {
    NavigationService.navigate('Tags', { selectTag: this.selectTag });
  };

  deselectTag = value => {
    const { tags } = this.state;
    tags.splice(tags.findIndex(tag => tag.value === value) - 1, 1);
    this.setState({ tags, isInvalid: false });
  };

  onRatingChange = authorRating => {
    this.setState({ authorRating, isInvalid: false });
  };

  renderSelectedTags = tags =>
    tags &&
    tags.map(tag => (
      <CancelableTag
        key={tag.name}
        name={tag.name}
        color={tag.color}
        onClick={this.deselectTag}
      />
    ));

  onChooseImage = () => {
    const options = {
      title: 'Select cover',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        quality: 0,
        noData: true
      }
    };
    ImagePicker.showImagePicker(options, response => {
      response.height = 275;
      this.setState({
        imageURL: response,
        isInvalid: false
      });
    });
  };

  uploadReview = () => {
    const { title, discription, authorRating, tags, imageURL } = this.state;
    if (title && discription && authorRating && tags && imageURL.uri) {
      this.props.uploadReview({
        title,
        discription,
        authorRating,
        tags,
        imageURL
      });
    } else {
      this.setState({ isInvalid: true });
    }
  };

  render() {
    const {
      title,
      discription,
      authorRating,
      tags,
      imageURL,
      isInvalid
    } = this.state;
    const { isLoading, error } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Fieldset
          onChangeText={this.onChangeTitle}
          textValue={title}
          title="Title"
          placeholder="Enter title..."
          isMultiline={false}
        />
        <View style={styles.infoContainer}>
          <Ripple
            rippleContainerBorderRadius={10}
            style={[
              styles.addImage,
              !imageURL.uri && {
                borderWidth: 2,
                borderStyle: 'dashed'
              }
            ]}
            onPress={this.onChooseImage}
          >
            {!imageURL.uri ? (
              <Icon name="image-plus" size={36} />
            ) : (
              <Image style={styles.bookCover} source={imageURL} />
            )}
          </Ripple>
          <View style={styles.ratingBlock}>
            <Text style={styles.title}>Rating</Text>
            <AirbnbRating
              count={5}
              defaultRating={authorRating}
              size={30}
              showRating={false}
              onFinishRating={this.onRatingChange}
            />
            <Text style={styles.title}>Tags</Text>
            <View style={styles.tagsContainer}>
              {this.renderSelectedTags(tags)}
              <AddTag onClick={this.onAddTagClick} />
            </View>
          </View>
        </View>
        <Fieldset
          onChangeText={this.onChangeDiscription}
          textValue={discription}
          placeholder="Enter discription..."
          title="Discription"
          isMultiline={true}
        />
        {(isInvalid || error) && (
          <Text style={styles.error}>
            {!error ? 'Please, fulfill all fields!' : error}
          </Text>
        )}
        <Button
          text="Create"
          onClick={this.uploadReview}
          isLoading={isLoading}
          colorStart="#5D85E1"
          colorEnd="#3CCFDB"
        />
      </ScrollView>
    );
  }
}

AddReviewView.propTypes = {
  isLoading: PropTypes.bool,
  initAuth: PropTypes.func,
  uploadReview: PropTypes.func
};

export default AddReviewView;
