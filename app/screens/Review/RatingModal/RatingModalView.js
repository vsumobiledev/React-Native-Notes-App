/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Ripple from 'react-native-material-ripple';
import styles from './styles';
import PropTypes from 'prop-types';

class RatingModalView extends Component {
  state = {
    rating: false
  };

  componentDidMount() {
    const { bookId, loadRating } = this.props;
    loadRating(bookId);
  }

  onRatingChange = rating => {
    this.setState({
      rating
    });
  };
  onRatingSave = () => {
    const { bookId, saveRating, closeModal } = this.props;
    const { rating } = this.state;
    closeModal();
    saveRating(rating, bookId);
  };
  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    const { isModalVisible, rating } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={this.closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.container} elevation={5}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={this.closeModal}
            >
              <Text>✕</Text>
            </TouchableOpacity>
            <View style={styles.inputs}>
              <Text style={styles.inputTitle}>Your rating</Text>
              <AirbnbRating
                count={5}
                defaultRating={rating}
                size={30}
                showRating={false}
                onFinishRating={this.onRatingChange}
              />
              <View style={styles.saveWrapper}>
                <Ripple
                  rippleContainerBorderRadius={50}
                  style={styles.save}
                  onPress={this.onRatingSave}
                >
                  <Text style={styles.saveText}>SAVE</Text>
                </Ripple>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

RatingModalView.propTypes = {
  closeModal: PropTypes.func,
  isModalVisible: PropTypes.bool,
  rating: PropTypes.number,
  bookId: PropTypes.string,
  saveRating: PropTypes.func,
  loadRating: PropTypes.func
};

export default RatingModalView;
