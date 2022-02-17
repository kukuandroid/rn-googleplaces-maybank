import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';
import Icon from '../icon';

const SearchResult = ({ item }, onAddressSelected) => {
    return (
        <TouchableOpacity
            style={tw`flex-row items-center`}
            onPress={() => onAddressSelected(item.description)}
        >
            <View style={tw`flex-col justify-center items-center`}>
             <Icon name={'map-marker-alt'} type='FontAwesome5' />
            </View>
            <View style={tw`pl-10 pr-14 flex-column`}>
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
