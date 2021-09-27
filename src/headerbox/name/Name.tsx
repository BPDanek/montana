import React from "react";

import { StyleSheet, Text, View} from "react-native"

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
        backgroundColor: '#F0F0F0',
        // margin: 
    },
});

export default HeaderBox;