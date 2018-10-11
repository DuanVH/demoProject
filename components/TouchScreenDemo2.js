import React, {Component} from 'react';
import {
    View, Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';

export default class TouchScreenDemo2 extends Component {

    constructor(props) {
        super(props);
    }

    _onPressButton = () => {
        alert("You pressed button!");
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor='yellow'
                    // khi tay bam xuong thi button doi sang mau gi va thuc hien 1 action
                    onShowUnderLay={() => {
                        alert("onShowUnderLay button!");
                    }}>
                    <View style={{backgroundColor: 'green'}}>
                        <Text style={{color: 'white', padding: 20, fontSize: 18}}>Touchable highlight</Text>
                    </View>
                </TouchableHighlight>

                {/*Chi hoat dong tren android*/}
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    // su dung mau nen cua view cha
                    useForeground={false}>
                    <View style={{width: 300, height: 50, margin: 20, backgroundColor: 'blue'}}>
                        <Text style={{
                            margin: 10,
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>Touchable Native Feedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity onPress={this._onPressButton}
                    // default=0.2
                                  activeOpacity={0.5}>
                    <View style={{width: 300, height: 50, margin: 20, backgroundColor: 'red'}}>
                        <Text style={{
                            margin: 10,
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={this._onPressButton}
                                          onPressIn={() => {
                                              alert("onPressIn: Khi nhan xuong man hinh");
                                          }}
                                          onPressOut-={() => {
                                              alert("onPressOut: khi tha tay");
                                          }}
                                          onLongPress={() => {
                                              alert("onLongPress");
                                          }}
                                          disable={false}>
                    <View style={{width: 300, height: 50, margin: 20, backgroundColor: 'purple'}}>
                        <Text style={{
                            margin: 10,
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}