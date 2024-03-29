import React, { useState } from 'react';
// import { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
// import { MARKER_IMAGE, SEARCH_PLACE } from '../../../constants/Maps';
import { SIZES } from '../../../constants/Layout';
// import Colors from '../../../constants/Colors';
import { Searchbar as SearchBarMaterial } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { fetchPlaces } from '../../../state/ducks/places-search/actions';
import tw from 'twrnc';

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(fetchPlaces(newValue));
        onSearch(true);
    };

    return (
        <View style={tw`items-center absolute mt-15 left-0 right-0`}>
            <SearchBarMaterial
                style={tw`w-3/4 z-2`}
                placeholder="Search"
                onChangeText={handleChange}
                value={value}
            />
        </View>
    );
};

export default SearchBar;
