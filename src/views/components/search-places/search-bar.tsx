import React, { useState } from 'react';
// import { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
// import { MARKER_IMAGE, SEARCH_PLACE } from '../../../constants/Maps';
import { SIZES } from '../../../constants/Layout';
// import Colors from '../../../constants/Colors';
import { Searchbar as SearchBarMaterial } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces } from '../../../state/ducks/places-search/actions';
import { RootState } from '../../../state/ducks/places-search';

const SearchBar = ({ onSearch }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    // const maps = useSelector((state: RootState) => state.searchPlaces.places);

    const handleChange = (newValue) => {
        setValue(newValue);
        dispatch(fetchPlaces(newValue));
        onSearch(true);
    };

    return (
        <View style={styles.subcontainer}>
            <SearchBarMaterial
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={handleChange}
                value={value}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40
    },
    subcontainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    searchbar: {
        width: SIZES.width / 1.2
    }
});
