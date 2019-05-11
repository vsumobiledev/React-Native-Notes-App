import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import AppStyles from '../../../config/styles';

const SearchFieldView = ({ placeholder, value, onChange, onSubmitEditing }) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="ios-search" size={20} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={AppStyles.rgba.BLACK_04}
        onChangeText={onChange}
        onSubmitEditing={onSubmitEditing}
        selectionColor="black"
        value={value}
        returnKeyType="search"
      />
    </View>
  );
};

SearchFieldView.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmitEditing: PropTypes.func
};

export default SearchFieldView;
