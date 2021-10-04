import React from "react";

import { StyleSheet, Text, View, Image } from "react-native"
import { getDebugColor } from "../devmode";
import Faceside from "./faceside/Faceside";
import Mapside from "./mapside/Mapside"

const HeaderBox = () => {
    return (
        <View style={styling.container}>
            <Faceside />
            <Mapside />
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderStyle: 'dotted',
        marginTop: 10,
        marginBottom: 10,
    }
});

export default HeaderBox;