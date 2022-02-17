import * as React from 'react';
import {
    StyleSheet,
    View as Views,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList
} from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import Maps from '../components/search-places/map';
import SearchBar from '../components/search-places/search-bar';
import SearchResult from '../components/search-places/search-result';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoords } from '../../state/ducks/places-search/actions';
import { RootState } from '../../state/ducks/places-search';
import tw from 'twrnc';
export default function TabOneScreen({
    navigation
}: RootTabScreenProps<'PlaceSearch'>) {
    const maps = useSelector((state: RootState) => state.searchPlaces.places);
    const dispatch = useDispatch();
    const [showList, setShowList] = React.useState(false);

    const onAddressSelected = (address: string) => {
        dispatch(fetchCoords(address));
        setShowList(false);
    };

    const onSearch = (val) => {
        setShowList(val);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Maps />
                <SearchBar onSearch={onSearch} />
                {showList && (
                    <Views
                        style={tw`absolute mt-35 p-4 items-center justify-center self-center`}
                    >
                        <FlatList
                            data={maps.places}
                            contentContainerStyle={tw`bg-white rounded-lg p-1`}
                            renderItem={(item) =>
                                SearchResult(item, onAddressSelected)
                            }
                            keyExtractor={(item) => item.predictions}
                            ItemSeparatorComponent={() => {
                                return <View style={tw`h-0.2 bg-slate-300`} />;
                            }}
                        />
                    </Views>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}
