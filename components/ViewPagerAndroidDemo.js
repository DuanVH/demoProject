import React, {Component} from 'react';
import {
    View, Text, ViewPagerAndroid, ScrollView, StyleSheet
} from 'react-native';

export default class ViewPagerAndroidDemo extends Component {
    render() {
        return (
            <ViewPagerAndroid style={{flex: 1}}
                // Trang khoi dau khi mo app
                              initialPage={0}
                              onPageScroll={(event) => {
                                  console.log(`offset = ${event.nativeEvent.offset}`)
                              }}
                              onPageScrollStateChanged={(state) => {
                                  console.log(`state = ${state}`)
                              }}
                              onPageSelected={(event) => {
                                  // bat dau tu Page 0
                                  console.log(`index = ${event.nativeEvent.position}`)
                              }}>
                <View style={{backgroundColor: 'purple'}}>
                    <Text style={styles.textStyle}>Screen 0</Text>
                </View>

                <View style={{backgroundColor: 'red'}}>
                    <Text style={styles.textStyle}>Screen 1</Text>
                </View>

                <View style={{backgroundColor: 'yellow'}}>
                    <Text style={styles.textStyle}>Screen 2</Text>
                </View>

                <View style={{backgroundColor: 'blue'}}>
                    <Text style={styles.textStyle}>Screen 3</Text>
                </View>


            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 15,
    },
});