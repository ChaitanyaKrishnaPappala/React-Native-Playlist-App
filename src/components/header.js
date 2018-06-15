import React from 'react';
import { Text, View } from 'react-native';


const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>Albums!</Text>
    </View>);
};


const styles = {
    textStyle: {
        color: '#F8B29C',
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8'
    }
};

export default Header;
