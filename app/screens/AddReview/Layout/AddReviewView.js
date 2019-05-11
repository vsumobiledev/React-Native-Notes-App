import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import { AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';
import NavigationService from '../../../navigation/NavigationService';
import AddTag from '../../../shared/components/AddTag';
import CancelableTag from '../../../shared/components/CancelableTag';
import Fieldset from '../../../shared/components/Fieldset';
import ModalBooks from '../ModalBooks';
import Button from '../../../shared/components/Button';
import PropTypes from 'prop-types';
import styles from './styles';
import AppStyles from '../../../config/styles';

class AddReviewView extends Component {
  state = {
    title: '',
    selectedBook: false,
    description: '',
    authorRating: 0,
    tags: [],
    image: false,
    isInvalid: false,
    typing: false,
    typingTimeout: 0,
    modalVisible: false
  };
  onChangeTitle = value => {
    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }
    if (self.state.selectedBook) {
      self.setState({
        selectedBook: false,
        image: false,
        title: value,
        isInvalid: false,
        typing: false,
        typingTimeout: setTimeout(() => {
          self.props.preloadBooks(self.state.title);
        }, 300)
      });
    } else {
      self.setState({
        title: value,
        isInvalid: false,
        typing: false,
        typingTimeout: setTimeout(() => {
          self.props.preloadBooks(self.state.title);
        }, 300)
      });
    }
  };
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
      if (!response.didCancel) {
        const source = { uri: 'data:image/jpeg;base64,' + response.data };
        ImageResizer.createResizedImage(source.uri, 320, 480, 'PNG', 80)
          .then(response => {
            this.setState({
              image: response.uri,
              isInvalid: false
            });
          })
          .catch(() => {
            return Alert.alert(
              'Unable to resize the photo',
              'Check the console for full the error message'
            );
          });
      }
    });
  };

  onSelectBook = book => {
    this.setState({
      selectedBook: book.key,
      title: book.title,
      image: book.image,
      modalVisible: false
    });
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  uploadReview = () => {
    const {
      title,
      description,
      authorRating,
      tags,
      image,
      selectedBook
    } = this.state;
    if (title && description && authorRating && tags.length > 0 && image) {
      const { user } = this.props;
      this.props.uploadReview(
        {
          title,
          description,
          authorRating,
          tags,
          image
        },
        selectedBook,
        user
      );
    } else {
      this.setState({ isInvalid: true });
    }
  };

  render() {
    const {
      title,
      description,
      authorRating,
      tags,
      image,
      isInvalid,
      modalVisible,
      selectedBook
    } = this.state;

    const { isLoading, error, isLoadingHints, books } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Fieldset
          onChangeText={this.onChangeTitle}
          textValue={title}
          title="Title"
          placeholder="Enter title..."
          isMultiline={false}
          withHints={true}
          isLoadingHints={isLoadingHints}
        />
        {books && books.length > 0 && (
          <TouchableOpacity
            style={styles.chooseBtn}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text>Select from existing books</Text>
          </TouchableOpacity>
        )}
        <ModalBooks
          setModalVisible={this.setModalVisible}
          modalVisible={modalVisible}
          onSelectBook={this.onSelectBook}
          books={books}
        />
        <View style={styles.infoContainer}>
          <Ripple
            disabled={selectedBook ? true : false}
            rippleContainerBorderRadius={10}
            style={[styles.addImage, !image && styles.addNotIamge]}
            onPress={this.onChooseImage}
          >
            {!image ? (
              <Icon name="image-plus" size={36} />
            ) : (
              <Image style={styles.bookCover} source={{ uri: image }} />
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
          onChangeText={this.onChangeDescription}
          textValue={description}
          placeholder="Enter description..."
          title="Description"
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
          colorStart={AppStyles.color.LIGTH_PURPLE}
          colorEnd={AppStyles.color.GREEN}
        />
      </ScrollView>
    );
  }
}

AddReviewView.propTypes = {
  isLoading: PropTypes.bool,
  uploadReview: PropTypes.func,
  isLoadingHints: PropTypes.bool,
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  user: PropTypes.object,
  error: PropTypes.string
};

export default AddReviewView;
