import React from "react";

import { StyleSheet, Text, View} from "react-native"

const HeaderBox = () => {
    return (
        <View style={styling.container}>
            <View>
                <Text>Face side</Text>
            </View>
            <View>
                <Text>Map side</Text>
            </View>
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
});

export default HeaderBox;