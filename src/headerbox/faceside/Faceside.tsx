import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native"
import { getDebugColor, montana_grey } from '../../devmode';

const profilePhoto = require('../../assets/defaultPhoto.png');

const Faceside = () => {
    return (
        <View style={styling.container}>
            <Image
                source={profilePhoto}
                defaultSource={profilePhoto} 
            />
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: montana_grey,
    }
})

export default Faceside;