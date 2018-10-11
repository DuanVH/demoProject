/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, View, Image, Navigator,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';
import ScreenTwo from "./components/HelloWorld";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


    constructor(props) {
        super(props);
        this.state = {
            num: 17,
            isShowText: true,
        };
        this.let = {
            uri: 'https://dsznajder.gallerycdn.vsassets.io/extensions/dsznajder/es7-react-js-snippets/1.8.6/1535318701167/Microsoft.VisualStudio.Services.Icons.Default'
        }
        /*hen gio Timers*/
        /*lap lai sau 1 thoi gian nhat dinh*/
        setInterval(() => {
            this.setState(previousState => {
                return {isShowText: !previousState.isShowText};
            })
        }, 1000);
    }

    render() {

        let display = this.state.isShowText ? this.state.num : '';

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => this.clickImageTop()}>
                    <Image style={{width: 100, height: 100}}
                           source={require('./images/icon_react.png')}/>
                </TouchableOpacity>

                <Text style={styles.num}> {this.state.num} </Text>

                <Text style={styles.num}> {display} </Text>

                <TouchableOpacity onPress={() => this.onClickWelcome()}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.clickMe}>
                    <Image style={styles.image}
                           source={this.let}/>
                </TouchableOpacity>

                <Text style={styles.textStyle}>duanvh</Text>
                <Text style={styles.textStyle}>112346</Text>

            </View>
        );
    }

    onClickWelcome() {
        console.log('Click me now!')
        this.setState({
            num: this.state.num + 1
        });
    }

    clickImageTop() {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    num: {
        textAlign: 'center',
        textShadowColor: 'red',
        fontSize: 30,
        color: 'red',
        marginBottom: 20,
    },
    image: {
        alignItems: 'stretch',
        width: 340,
        height: 240,
        marginBottom: 20,
    },
    textStyle: {
        margin: 10,
        fontSize: 30,
        color: 'red',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'blue',

    },
});
