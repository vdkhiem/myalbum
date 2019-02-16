import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) =>  {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.caption}</Text>
        </View>
    ); 
};

const styles = {
    viewStyle: {
        justifyContent: 'center', //vertical align
        alignItems: 'center', //horizontal align
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000', // Use shawdow properties to create 3d box
        shadowOffset: { width: 0, height: 2 }, // define thickness of shadow
        shadowOpacity: 0.2, // define how bold of shadow
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        justifyContent: 'center'
    }
};

// Make the component available to other parts of app
export default Header;

