import React, {Component} from 'react';
import {
    View, TextInput, Text, Image, ScrollView, Dimensions
} from 'react-native';

export default class ScrollViewHorizontal extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}  // Cho phep lat trang
                showsVerticalScrollIndicator={true}
                onMomentumScrollBegin={() => {
                    // alert("Bat dau vuot thi goi ham nay");
                }}
                onMomentumScrollEnd={() => {
                    // alert("khi dung vuot");
                }}
                onScroll={(event) => {
                    let logData = `x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
                    console.log(logData);
                }}
                // 10ms update 1 lan
                scrollEventThrottle={10}
            >
                <View
                    style={{
                        backgroundColor: 'red',
                        flex: 1, marginTop: 20,
                        width: screenWidth,
                        height: screenHeight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        Screen 1
                    </Text>

                </View>

                <View
                    style={{
                        backgroundColor: 'yellow',
                        flex: 1, marginTop: 20,
                        width: screenWidth,
                        height: screenHeight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        Screen 2
                    </Text>

                </View>

                <View
                    style={{
                        backgroundColor: 'green',
                        flex: 1, marginTop: 20,
                        width: screenWidth,
                        height: screenHeight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        Screen 3
                    </Text>

                </View>

                <View
                    style={{
                        backgroundColor: 'blue',
                        flex: 1, marginTop: 20,
                        width: screenWidth,
                        height: screenHeight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        Screen 4
                    </Text>

                </View>

                <View
                    style={{
                        backgroundColor: 'purple',
                        flex: 1, marginTop: 20,
                        width: screenWidth,
                        height: screenHeight,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        Screen 5
                    </Text>

                </View>
            </ScrollView>
        );
    }
}