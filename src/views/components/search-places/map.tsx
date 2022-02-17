import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import useGetCoordinates from '../../../hooks/useGeolocation';
import { useDispatch, useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import { RootState } from '../../../state/ducks/places-search';
import MapMarker from './marker';
import tw from 'twrnc';
import Icon from '../icon';
import { useRef } from 'react';
import { fetchCoordsSuccess } from '../../../state/ducks/places-search/actions';

const Maps = () => {
    const baseCoords = useGetCoordinates();

    const mapRef = useRef();
    const dispatch = useDispatch();
    const { coords = [] } = useSelector(
        (state: RootState) => state.searchPlaces.coords
    );
    const coordsChanged = coords.length > 0;

    const onMapCenter = () => {
        dispatch(fetchCoordsSuccess(baseCoords));
    };

    return (
        <View style={tw`h-auto`}>
            <MapView
                style={tw`w-full h-full`}
                zoomEnabled
                zoomTapEnabled
                minZoomLevel={8}
                ref={mapRef}
                region={{
                    latitude: coordsChanged
                        ? coords[0].geometry.location.lat
                        : baseCoords.latitude,
                    longitude: coordsChanged
                        ? coords[0].geometry.location.lng
                        : baseCoords.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                <MapMarker
                    baseCoords={baseCoords}
                    coords={coords}
                    coordsChanged={coordsChanged}
                />
            </MapView>
            <TouchableOpacity
                onPress={onMapCenter}
                style={tw`absolute self-end top-120 right-10 bg-white rounded-full p-1 `}
            >
                <Icon
                    name={'locate'}
                    style={tw`text-black text-4xl`}
                    type="Ionicons"
                />
            </TouchableOpacity>
        </View>
    );
};

export default Maps;
