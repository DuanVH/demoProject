import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let imageSource = {
            uri: "https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/1.8.6/1535318701167/Microsoft.VisualStudio.Services.Icons.Default"
        };

        return (
            <View>
                <View style={{backgroundColor: 'red', width: 70, height: 70}}/>
                <View style={{backgroundColor: 'yellow', width: 70, height: 70}}/>
                <View style={{backgroundColor: 'cyan', width: 70, height: 70}}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 60,
        height: 60,
    },
    textDesign: {
        textAlign: 'center',
        margin: 20,
        fontSize: 30,
        marginTop: 15,
        color: 'white'
    },
});