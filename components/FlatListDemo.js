import React, {Component} from 'react';
import {
    View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Alert, Platform, TouchableHighlight
} from 'react-native';
import SwipeOut from 'react-native-swipeout';
import flatListData from '../data/flatListData';
import AddModel from './AddModel';
import EditModel from './EditModel';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: null,
            numberOfRefresh: 0,
        }
    }

    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onItemPress: {},
            onClose: (secId, rowId, direction) => {
                if (this.state.activeKey != null) {
                    this.setState({activeKey: null})
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeKey: this.props.item.key})
            },
            right: [
                {
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                    // type se quy dinh mau
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete item?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        // Refresh
                                        this.props.parentFlatList.refreshFlatList(deletingRow)
                                    }
                                },
                            ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }

            ],
            rowID: this.props.index,
            sectionID: 1
        };
        return (
            <SwipeOut {...swipeSettings}>
                <TouchableOpacity onPress={() => {
                    Alert.alert("abc");
                }}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{
                            flex: 1,
                            backgroundColor: this.props.index % 2 == 0 ? 'red' : 'purple',
                            flexDirection: 'row'
                        }}>
                            <Image style={styles.imageStyle}
                                   source={{uri: this.props.item.imageUrl}}/>
                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Text style={styles.textStyle}>{this.props.item.name}</Text>
                                <Text style={styles.textStyle}>{this.props.item.description}</Text>
                                {/*<Text>Vu Huu Duan</Text>*/}
                            </View>

                        </View>
                        <View style={{height: 3, backgroundColor: 'yellow'}}/>
                    </View>
                </TouchableOpacity>
            </SwipeOut>
        );
    }
}

export default class FlatListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteRowKey: null,  // Key cua item bi xoa
        }
        // Note!
        this._onPressAdd = this._onPressAdd.bind(this);
    }

    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }

    _onPressAdd() {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS == 'ios' ? 30 : 0}}>

                <View style={{
                    backgroundColor: 'tomato',
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TouchableHighlight
                        style={{marginRight: 10}}
                        underlayColor='tomato'
                        onPress={
                            () => {
                                this._onPressAdd()
                            }
                        }>
                        <Image style={{width: 35, height: 35}}
                               source={require('../images/icon_add.png')}/>
                    </TouchableHighlight>
                </View>

                <FlatList
                    ref={"flatList"}  // dat ten cho doi tuong de noi khac co the goi: this.props.flatList.???
                    data={flatListData}
                    renderItem={({item, index}) => {
                        // item la object trong mang flatListData
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            // tra ve jsx cua tung compomnent (row trong list)
                            <FlatListItem
                                item={item}
                                index={index}
                                parentFlatList={this}  // delete row item
                            >

                            </FlatListItem>
                        );
                    }}>

                </FlatList>

                <AddModel ref={'addModal'}  // tro den component addModal
                          parentFlatlist={this}  // doi tuong FlatListDemo  // add row item
                >

                </AddModel>

                <EditModel ref={'editModal'}
                           parentFlatList={this}>

                </EditModel>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 15,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
});
