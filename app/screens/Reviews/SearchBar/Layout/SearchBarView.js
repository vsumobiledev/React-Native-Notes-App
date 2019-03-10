import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SearchField from '../../../../shared/component/SearchField';
import Filters from '../Filters';
import styles from './styles';

const SearchBarView = ({ searchName }) => {
    return (
        <View style={styles.container}>
            <SearchField placeholder="Search..." value={searchName} onChange={this.onChangeSearchText} />
            <Filters />
        </View>
    );
};

SearchBarView.propTypes = {
    searchName: PropTypes.string
};

export default SearchBarView;
