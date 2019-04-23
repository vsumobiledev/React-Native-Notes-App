import React from 'react';
import { Text, View } from 'react-native';
import StyleSheetFactory from './styles';
import PropTypes from 'prop-types';

const TagView = ({ name, color }) => {
  const styles = StyleSheetFactory.getSheet(color);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

TagView.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
};

export default TagView;
