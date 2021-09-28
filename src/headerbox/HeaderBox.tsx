import React from "react";

import { StyleSheet, Text, View, Image } from "react-native"
import { getDebugColor } from "../devmode";
import Faceside from "./faceside/Faceside";

const HeaderBox = () => {
    return (
        <View style={styling.container}>
            <Faceside />
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
        justifyContent: 'space-between',

        // debug
        backgroundColor: getDebugColor(),
    },
    faceSide: {
        // backgroundColor: getDebugColor(),
        backgroundColor: '#C4C4C4',
    },
    profilePhoto: {
        borderRadius: 20,
    },
    mapSide: {
        backgroundColor: getDebugColor()
    }
});

export default HeaderBox;s