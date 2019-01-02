import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Card = () => {
    const {containerStyle, textStyle} = styles
    return(
        <View style={containerStyle}>
            <Text style={textStyle}>Bagasi</Text>
        </View>
    )
}

const styles = {
    containerStyle: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
}

export default Header;