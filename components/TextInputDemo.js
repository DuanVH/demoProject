import React, {Component} from 'react';
import {View, TextInput, Text, Keyboard} from 'react-native';


export default class TextInputDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typeText: 'Please type your text',
            typePass: '',
            typeDescription: ''
        };
    }

    // Khi 1 component duoc tao
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {typeText: 'Keyboard is show'}
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {typeText: 'Keyboard is hide'}
            })
        });
    }

    render() {
        return (
            <View>
                <TextInput style={{height: 40, margin: 20, padding: 10, borderColor: 'cyan', borderWidth: 1}}
                           keyboardType='email-address'
                           placeholder='Enter your email'
                           placeholderTextColor='red'
                           autoFocus={true}
                           returnKeyType='go'
                           onChangeText={(text) => {
                               // Go den dau thi text se duoc luu vao typeText
                               this.setState((previousState) => {
                                   return {
                                       typeText: text
                                   };
                               })
                           }}
                />

                <Text style={{
                    margin: 10,
                    fontSize: 20,
                    color: 'black',
                    backgroundColor: 'red'
                }}>{this.state.typeText}</Text>

                <TextInput style={{height: 40, margin: 20, padding: 10, borderColor: 'cyan', borderWidth: 1}}
                           placeholder='Enter your password'
                           placeholderColor='red'
                           secureTextEntry={true}
                           returnKeyType='go'
                           onChangeText={(text) => {
                               this.setState((previousState) => {
                                   return {
                                       typePass: text
                                   };
                               })
                           }}
                />

                <TextInput style={{height: 100, margin: 20, padding: 10, borderColor: 'cyan', borderWidth: 1}}
                           keyboardType='default'
                           placeHolder='Enter your password'
                           borderBottomColor='green'
                           borderBottomWidth={3}
                           borderLeftColor='green'
                           borderLeftWidth={3}
                           multiline={true}
                           returnKeyType='done'
                           onSubmitEditing={Keyboard.dismiss}
                           editable={true}
                           onChangeText={(text) => {
                               this.setState(() => {
                                   return {
                                       typeDescription: text
                                   };
                               })
                           }}
                />
            </View>
        );
    }

    // khi 1 component duoc giai phong (khong lam gi no nua)
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
}