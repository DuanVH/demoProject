import React, {Component} from 'react';
import {
    View, Text, Image, TextInput, FlatList,
    Alert,
    StyleSheet, Platform, Dimensions,
    TouchableOpacity, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import horizontalStatus from "../data/flatListDataHorizontalData";
import flatListDataHorizontalData from "../data/flatListDataHorizontalData";

var screen = Dimensions.get('window');

class HorizontalFlatListItem extends Component {

    onClickItem = () => {
        alert(`Vu Duan UET:  ${this.props.item.hour}`);
    }

    render() {
        return (
            <View style={styles.itemStyle}>

                <Text style={styles.textStyle}>
                    {this.props.item.hour}
                </Text>

                <Icon
                    name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                    size={20}
                    color='white'/>

                <Text style={styles.textStyle}>
                    {this.props.item.degrees} ℉
                </Text>
            </View>
        );
    }
}

export default class FlatListHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
                    <Image
                        style={{width: screen.width, height: screen.height}}
                        source={{uri: 'http://images3.wikia.nocookie.net/__cb57886/onepiece/images/1/1d/Nami-Film-Z.png'}}/>
                </View>

                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                    margin: 10
                }}>
                    Weather
                </Text>
                <View style={{height: 150}}>

                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5
                        }}
                        horizontal={true}
                        data={flatListDataHorizontalData}
                        // Moi item se la tung item trong flatListDataHorizontalData
                        renderItem={({item, index}) => {
                            return (
                                <HorizontalFlatListItem
                                    item={item}
                                    index={index}
                                    parentFlatList={this}>

                                </HorizontalFlatListItem>
                            );
                        }}
                        // su dung truong nao lam key or co the them truong key vao object cua data
                        keyExtractor={(item, index) => item.hour}
                    >

                    </FlatList>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        marginTop: Platform.OS == 'ios' ? 34 : 0,
    },
    itemStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
});