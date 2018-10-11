import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: true,
        };
        var taskTodo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        };
        const timeToBlink = 1000;
        setInterval(taskTodo, timeToBlink);
    }

    render() {
        let greetingString = this.state.showText ? `Hello ${this.props.name}` : ''
        return (
            <Text>{greetingString}</Text>
        );
    }
}

export default class Splash extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Vu Duan'></Greeting>
                <Greeting name='UET'></Greeting>
            </View>
        );
    }
}