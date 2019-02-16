import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPress, children }) => {
    const { buttonStyle, textStyle } = styles;



    return (
        <TouchableOpacity style={buttonStyle} onPress={whenPress}>
            <Text style={textStyle}> {children} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600', //bold
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1, // expand the full content
        alignSelf: 'stretch', // flex box rule mean stretch yourself in container
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
}

export default Button;