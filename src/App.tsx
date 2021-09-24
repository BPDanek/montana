import HeaderBox from './headerbox/HeaderBox';
import ActivityList from './activitylist/ActivityList';

import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
    return (
        <View style={flex: 1, backgroundColor: "red" }>
            <HeaderBox />
            <ActivityList />
        </View>
    );
}

export default App;
