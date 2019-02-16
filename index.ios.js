// import a library to help create a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
// Create component

const App = () => {
    return (
        <div>
            <Text>Hellow world</Text>
            <Text>Khiem Vo</Text>
        </div>
        
    );
};


// Render it to device
// first argument has to match with Project name
AppRegistry.registerComponent('myjirasync', () => App);