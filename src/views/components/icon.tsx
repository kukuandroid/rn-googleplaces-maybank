import React from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const Icon = ({ name, style, type }) => {
    if (type === 'Ionicons') {
        return (
            <Ionicons style={[tw`text-lg text-red-400`, style]} name={name} />
        );
    } else {
        return (
            <FontAwesome5
                style={[tw`text-lg text-red-400 ml-4`, style]}
                name={name}
            />
        );
    }
};

export default Icon;
