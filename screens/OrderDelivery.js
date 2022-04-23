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

    function renderMap() {

    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}

        </View>
    );
};

export default OrderDelivery;

const styles = StyleSheet.create({});