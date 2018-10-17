import React, {Component} from 'react';
import {
    View, TextInput, Text, Image,
    Platform, Dimensions, StyleSheet,
} from 'react-native';

class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log(`${Date.now()}. This is constructor`);
        this.state = {
            numberRefresh: 0
        }
    }

    componentWillMount() {
        console.log(`${Date.now()}. This is componentWillMount`);
    }

    componentDidMount() {
        console.log(`${Date.now()}. This is componentDidMount`);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    render() {
        var lifeCycle = <LifeCycle/>
        return (
            <View style={{flex: 1, marginTop: 100}}>
                {lifeCycle}
            </View>
        );
    }

}

export default class LifeCycleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}