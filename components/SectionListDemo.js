import React, {Component} from 'react';
import {
    View, Text, TextInput, Image, SectionList, StyleSheet,
    Platform, Dimensions,
} from 'react-native';
import {sectionListData} from "../data/sectionListData";

class SectionItem extends Component {

    render() {
        return (
            <View style={styles.itemStyle}>
                <Text style={styles.textStyle}>{this.props.item.name}</Text>
                <Text style={styles.descriptionStyle}>{this.props.item.description}</Text>
                <View style={{height: 1, backgroundColor: 'red', marginLeft: 20, marginRight: 10}}/>
            </View>
        );
    }
}

class HeaderItem extends Component {
    render() {
        return (
            <View style={styles.headerStyle}>
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 22,
                        margin: 10
                    }}>{this.props.section.title}</Text>
            </View>
        );
    }
}

export default class SectionListDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: '2222',
            duan: 'Ahihi'
        }

    }

    render() {
        const a = this.state.number;
        return (
            <View style={styles.container}>

                <TextInput
                    style={{color: 'black', fontSize: 20}}
                    value={a}/>

                <SectionList
                    renderItem={({item, index}) => {
                        return (
                            <SectionItem
                                item={item}
                                index={index}>

                            </SectionItem>
                        );
                    }}
                    renderSectionHeader={({section}) => {
                        return (
                            <HeaderItem
                                section={section}/>

                        );
                    }}
                    sections={sectionListData}
                    keyExtractor={(item, index) => item.name}
                >

                </SectionList>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34 : 0,
    },
    itemStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    headerStyle: {
        flex: 1,
        backgroundColor: 'red',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
        marginLeft: 20,
        marginRight: 10,
    },
    descriptionStyle: {
        fontSize: 16,
        color: 'red',
        marginLeft: 20,
        marginRight: 10,
    },
});