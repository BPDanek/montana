import React from 'react';
import { Image, Text, View, StyleSheet, Button } from "react-native"

// As of now, we cannot make an actual map view & pin drop for users, we would have to make some proprietary version of that.
// To add location specific value to the customer, however, we can simply  add a textual location descriptor.
// Basically just include location, last updated. Location should be something simple, short, and human readable so that
// it fits, and so that it also makes sense to the user. 
const Mapside = () => {
    
    // const location = backend.fetchLocation(props.user);
    // const last = backend.fetchLocation(props.user);

    const date = new Date();
    const now = !date.getTime().toString() ? "never updated" : date.getMinutes().toString();
    const location = {
        title:  "Arby's Grill",
        city:   "Cupertino",
        state:  "CA",
        updated: now,
    };

    return (
        <View style={styling.container}>
            <View>
                <Text>
                    {location.title}
                </Text>
                <Text>
                    {location.city}, {location.state}
                </Text>
                <Text style={{ fontStyle: 'italic'}}>
                    {location.updated} minutes
                </Text>
            </View>
            <View>
                <Text>[update location]</Text>
            </View>
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        // backgroundColor: getDebugColor(),
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default Mapside;