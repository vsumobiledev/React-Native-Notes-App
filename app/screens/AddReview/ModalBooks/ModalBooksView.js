import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Modal,
  View
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import styles from './styles';

class ModalBooksView extends React.Component {
  renderBook = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this.props.onSelectBook(item);
      }}
      style={[styles.book]}
      key={item.key}
    >
      <View style={styles.flex}>
        <Image style={styles.bookIcon} source={{ uri: item.image }} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <AirbnbRating
        count={5}
        defaultRating={item.rating}
        size={14}
        showRating={false}
        isDisabled={true}
      />
    </TouchableOpacity>
  );

  closeModal = () => {
    this.props.setModalVisible(false);
  };

  render() {
    const { books, modalVisible } = this.props;
    return (
      <Modal
        onRequestClose={this.closeModal}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <FlatList
          nestedScrollEnabled
          data={books}
          renderItem={this.renderBook}
        />
      </Modal>
    );
  }
}

ModalBooksView.propTypes = {
  books: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  onSelectBook: PropTypes.func,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func
};

export default ModalBooksView;
