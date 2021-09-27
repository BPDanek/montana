import React from "react";

import { StyleSheet, Text, View} from "react-native"
import { getColor, getDebugColor } from "../devmode";

const HeaderBox = () => {
    return (
        <View style={styling.container}>
            <View style={styling.faceSide}>
                <Text>Face side</Text>
            </View>
            <View style={styling.mapSide}>
                <Text>Map side</Text>
            </View>
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        // flex params 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: getDebugColor()
    },
    faceSide: {
        backgroundColor: getDebugColor()

    },
    mapSide: {
        backgroundColor: getDebugColor()
    }
});

export default HeaderBox;