import * as React from 'react';
import {  View, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchResult = ({ item }, onAddressSelected) => {
    return (
        <TouchableOpacity
            style={tw`flex-row items-center `}
            onPress={() => onAddressSelected(item.description)}
        >
            <View style={tw`flex-column justify-center items-center`}>
                <FontAwesome5
                    style={tw`text-lg text-red-400 ml-4`}
                    name="map-marker-alt"
                />
            </View>
            <View style={tw`pl-10 pr-14 pv-5 flex-column`}>
                <Text style={tw`text-base font-bold`}>{item.description}</Text>
                <View style={tw`mt-1 flex`}>
                    <View style={tw`flex-row justify-between`}>
                        <Text style={tw`text-sm`}>
                            {item.types.map((x) => x)}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SearchResult;
