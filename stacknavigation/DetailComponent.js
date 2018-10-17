import React, {Component} from 'react';
import {
    View, Text, Image,
    Dimensions, Platform, StyleSheet,
} from 'react-native';
import Button from "react-native-button";
import {DetailScreen, ThirdScreen} from "./screenNames";

export default class DetailComponent extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let headerTitle = 'Detail';  // dat ten dung: headerTitle
        let headerStyle = {backgroundColor: 'red'};
        let headerTitleStyle = {color: 'yellow'};
        let headerTintColor = 'white';
        let headerBackTitle = ' ';
        return {headerTitle, headerStyle, headerTitleStyle, headerTintColor, headerBackTitle};
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        let data = this.props.navigation.state.params;
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    This is Detail Screen
                </Text>
                <Text style={styles.textDataStyle}>
                    {data.name}
                </Text>
                <Text style={styles.textDataStyle}>
                    {data.birthday}
                </Text>
                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: 'violet'
                    }}
                    style={styles.buttonStyle}
                    onPress={() => {
                        // this.props.navigate(DetailScreen);
                        navigation.navigate(ThirdScreen);
                    }}>
                    Navigation Third
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    textDataStyle: {
        marginTop: 20,
        fontSize: 20,
        color: 'white'
    },
});