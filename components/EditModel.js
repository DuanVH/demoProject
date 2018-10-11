import React, {Component} from 'react';
import {
    View, Image, Text, Platform, TextInput, Alert, Dimensions, TouchableHighlight, StyleSheet
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class EditModel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            description: '',
        };
    }

    showEditModal = (editingFood, flatlistItem) => {
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            description: editingFood.description,
            flatlistItem: flatlistItem
        });
        this.refs.editModal.open();
    }

    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }

    render() {
        return (
            <Modal
                ref={"editModal"}
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
                <Text style={styles.textStyle}>Edit Item</Text>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter food ..."
                    onChangeText={(text) => {
                        this.setState({
                            foodName: text
                        })
                    }}
                    value={this.state.foodName}
                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter description ..."
                    onChangeText={(text) => {
                        this.setState({
                            description: text
                        })
                    }}
                    value={this.state.description}
                />
                <Button
                    style={styles.buttomStyle}
                    onPress={() => {
                        if (this.state.foodName.length == 0 || this.state.description.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return;
                        }
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].description = this.state.description;
                        this.state.flatlistItem.refreshFlatListItem();
                        this.refs.editModal.close();
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