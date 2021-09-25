import HeaderBox from './headerbox/HeaderBox';
import ActivityList from './activitylist/ActivityList';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
        <View style={styling.container}>
            <HeaderBox />
            <ActivityList />
        </View>
    );
}

const styling = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    }
});

export default App;
