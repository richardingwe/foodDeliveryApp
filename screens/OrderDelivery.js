import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants";

const OrderDelivery = () => {

    const mapView = React.useRef()

    const [restaurant, setRestaurant] = React.useState(null)
    const [streetName, setStreetName] = React.useState("")
    const [fromLocation, setFromLocation] = React.useState(null)
    const [toLocation, setToLocation] = React.useState(null)
    const [region, setRegion] = React.useState(null)

    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [angle, setAngle] = React.useState(0)

    function renderMap() {
        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 1 }}>

                </MapView>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}

        </View>
    );
};

export default OrderDelivery;
