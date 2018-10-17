import React, {Component} from 'react';
import {
    ActivityIndicator,
    View, Text, Image,
    Dimensions, Platform, StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import {DetailScreen, ThirdScreen} from "./screenNames";

export default class MainComponent extends Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        let headerTitle = 'Main';  // dat ten dung: headerTitle
        let headerStyle = {backgroundColor: 'blue'};
        let headerTitleStyle = {color: 'red'};
        let headerRight = (
            <Button
                style={styles.buttonStyle}
                containerStyle={{
                    margin: 5,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: 'darkviolet',
                    width: 60,
                    height: 40,
                }}
                onPress={() => {
                    params.onSave();
                }}>
                Save
            </Button>
        );
        let headerBackTitle = ' ';
        return {headerTitle, headerStyle, headerTitleStyle, headerRight, headerBackTitle};
    };

    // Trong navigation khong the goi truc tiep duoc ham _onSave() vi no la doi tuong static
    // Nhet _onSave vao param; trong param thi co thuoc tinh onSave, va gan onSave: _onSave
    // Va can bind(this) de bien this chinh la this cua MainComponent
    _onSave() {
        if (this.props.navigation.state.params.isSaving == true) {
            // isSaving: true => Dang lam viec
            return;
        }
        this.props.navigation.setParams({isSaving: true});
        setInterval(() => {
            console.log("Press save!");
            this.props.navigation.setParams({isSaving: false});
        }, 3000);
    }

    componentDidMount() {
        this.props.navigation.setParams({onSave: this._onSave.bind(this), isSaving: false});
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        let dataSendToDetail = {
            name: "Vu Huu Duan",
            birthday: "17.02.96",
        };
        let mainView = (navigation.state.params && navigation.state.params.isSaving === true) ?
            <ActivityIndicator size="large" color="#0000ff"/> :
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    This is Main Screen
                </Text>

                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: 'red'
                    }}
                    style={styles.buttonStyle}
                    onPress={() => {
                        // this.props.navigate(DetailScreen);
                        navigation.navigate(DetailScreen, dataSendToDetail);
                    }}>
                    Navigation Detail
                </Button>

                <Button
                    containerStyle={{
                        padding: 10,
                        margin: 20,
                        width: 200,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: 'red'
                    }}
                    style={styles.buttonStyle}
                    onPress={() => {
                        // this.props.navigate(ThirdScreen);
                        navigation.navigate(ThirdScreen);
                    }}>
                    Navigation Third
                </Button>
            </View>
        return mainView;
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    buttonStyle: {
        fontSize: 18,
        color: 'white',
    },
});