import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native"

const Faceside = () => {
    return (
        <View style={styling.image}>
            <Text>Face side</Text>
            <Image
                style={styling.image}
                source={}
                defaultSource={} 
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