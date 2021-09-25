import React from "react";


import { StyleSheet, Text, View } from "react-native"

const ActivityList = () => {
    return (
        <View style={styling.container}>
            <Text>this is activitylist</Text>
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default ActivityList;