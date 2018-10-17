import React, {Component} from 'react';
import {
    View, Text, Image,
    Dimensions, Platform, StyleSheet,
} from 'react-native';

export default class ThirdScreenComponent extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let headerTitle = 'Third';  // dat ten dung: headerTitle
        let headerStyle = {backgroundColor: 'pink'};
        let headerTitleStyle = {color: 'yellow'};
        let headerTintColor = 'white';
        return {headerTitle, headerStyle, headerTitleStyle, headerTintColor};
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    This is Third Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
});