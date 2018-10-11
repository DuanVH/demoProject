import React, {Component} from 'react';
import {
    View, Text, Image, TextInput,
    Alert,
    StyleSheet, Platform, Dimensions,
    TouchableOpacity, TouchableHighlight
} from 'react-native';

class HorizontalFlatListItem extends Component {
    render() {
        return(
            <View style={styles.itemStyle}>

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
                <View
                    style={{
                        backgroundColor: 'black',
                        opacity: 0.5
                    }}
                    horizontal={true}
                    renderItem={({item, index}) => {
                        return (
                            <HorizontalFlatListItem
                                item={item}
                                index={index}
                                parentFlatList={this}>

                            </HorizontalFlatListItem>
                        );
                    }}>

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
    textStyle: {},
});