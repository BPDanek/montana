import HeaderBox from './headerbox/HeaderBox';
import ActivityList from './activitylist/ActivityList';
import Name from './headerbox/name/Name';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDebugColor } from './devmode';

const App = () => {
    return (
        <View style={styling.container}>
            <Name />
            <HeaderBox />
            <ActivityList />
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        // flex paramsx
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',

        // spacing
        margin: 5,
    }
});

export default App;
