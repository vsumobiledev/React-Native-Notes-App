import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import IoniconsComponent from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const SearchFieldView = ({ placeholder, value, onChange }) => {
  return (
    <View style={styles.container}>
      <IoniconsComponent style={styles.icon} name="ios-search" size={20} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(40, 40, 40, 0.4)"
        onChangeText={onChange}
        selectionColor="black"
        value={value}
      />
    </View>
  );
};

SearchFieldView.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchFieldView;
