import React from "react";

import { StyleSheet, Text, View} from "react-native"
import { montana_grey } from "../../devmode";

const HARDCODED_NAME = 'Benjamin P Danek' //todo

const HeaderBox = () => {
    return (
        <View style={styling.container}>
            <Text>{HARDCODED_NAME}</Text>
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: montana_grey,       
    },
});

export default HeaderBox;