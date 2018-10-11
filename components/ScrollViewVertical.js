import React, {Component} from 'react';
import {
    View, Text, ScrollView, TextInput, Image, StyleSheet, Dimensions
} from 'react-native';

export default class ScrollViewVertical extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                // only IOS
                maxmumZoomScale={3}
                maxmumZoomScale={0.2}
                keyboardDismissMode='on-drag'>
                <Image
                    style={{
                        marginTop: 20,
                        width: screenWidth,
                        height: screenWidth * 353 / 185
                    }}
                    source={{uri: 'https://vignette.wikia.nocookie.net/onepiece/images/4/4f/Portgas_D._Ace_Anime_Infobox.png/revision/latest?cb=20171114104823'}}/>

                <Text style={styles.text}>Vu Huu Duan</Text>

                <TextInput style={{padding: 10, margin: 10, borderWidth: 1, borderRadius: 5}}
                           placeholder='Enter text'/>

                <View>
                    <Text>Ahihi</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    image: {
        width: 100,
        height: 180,
    },
    text: {
        margin: 20,
        fontSize: 18,
        color: 'white',
        backgroundColor: 'red',
        textAlign: 'center',
        padding: 20
    },
});