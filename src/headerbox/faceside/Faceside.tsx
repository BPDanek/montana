import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native"

import defaultPhoto from '../../assets/defaultPhoto.png'
const profilePhoto = Image.resolveAssetSource(defaultPhoto).uri;

const Faceside = () => {
    return (
        <View style={styling.image}>
            <Text>Face side</Text>
            <Image
                style={styling.image}
                source={{uri: profilePhoto}}
                defaultSource={{uri: profilePhoto}} 
            />
        </View>
    );
}

const styling = StyleSheet.create({
    image: { 
        backgroundColor: '#F09090'
    }
})

export default Faceside;