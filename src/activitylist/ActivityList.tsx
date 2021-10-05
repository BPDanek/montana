import React from "react";

import { StyleSheet, Text, View } from "react-native";
import * as fakeAcitivtyJson from './activityListFake.json';

const ActivityList = () => {

    const fakeAcitivtyData = fakeAcitivtyJson;

    return (
        <View style={styling.container}>
            <Text>this is activitylist</Text>
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        flexDirection: 'row',   
        justifyContent: 'space-around',
    }
});

export default ActivityList;