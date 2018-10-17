import React, {Component} from 'react';
import {
    View, Image, Text, Platform, TextInput, Alert, Dimensions, TouchableHighlight, StyleSheet
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class AddModel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFoodName: 'ashihi',
            newDescription: '',
        };
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }

    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS == 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    height: 280,
                    width: screen.width - 80,
                    alignItems: 'center'
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}>
                <Text style={styles.textStyle}>Add New Item</Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter new food ..."
                    onChangeText={(text) => {
                        this.setState({
                            newFoodName: text
                        })
                    }}
                    value={this.state.newFoodName}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter description ..."
                    onChangeText={(text) => {
                        this.setState({
                            newDescription: text
                        })
                    }}
                    value={this.state.newDescription}
                />
                <Button
                    style={styles.buttomStyle}
                    onPress={() => {
                        if (this.state.newFoodName.length == 0 || this.state.newDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.generateKey(10);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            description: this.state.newDescription,
                            imageUrl: "https://res.cloudinary.com/teepublic/image/private/s--lFiQrx9j--/t_Preview/b_rgb:484849,c_limit,f_jpg,h_630,q_90,w_630/v1511879015/production/designs/2113535_1.jpg"
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatlist.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>

            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
    },
    textInputStyle: {
        color: 'red',
        fontSize: 18,
        height: 40,
        marginLeft: 38,
        marginRight: 30,
        marginTop: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    buttomStyle: {
        width: 70,
        height: 30,
        fontSize: 18,
        color: 'white',
        marginTop: 30,
        backgroundColor: 'gray',
        borderRadius: 5,
        textAlign: 'center'
    },
});