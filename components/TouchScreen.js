import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import Button from 'react-native-button';

export default class TouchScreen extends Component {
    _onPressButton = () => {
        Alert.alert("You pressed button!")
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button style={{
                    fontSize: 25,
                    color: 'white',
                    backgroundColor: 'red',
                    padding: 15,
                    borderRadius: 15,
                    shadowRadius: 20,
                    shadowOpacity: 0.5
                }}
                        onPress={this._onPressButton}
                >This is button</Button>
                {/*<View style={{*/}
                {/*backgroundColor: 'red',*/}
                {/*padding: 10,*/}
                {/*borderRadius: 20,*/}
                {/*shadowRadius: 20,*/}
                {/*shadowOpacity: 0.5  // muc do do?mau cua shadow*/}
                {/*}}>*/}
                {/*<Button onPress={this._onPressButton}*/}
                {/*title='This is button'*/}
                {/*color='white'*/}
                {/*/>*/}
                {/*</View>*/}
            </View>
        );
    }
}