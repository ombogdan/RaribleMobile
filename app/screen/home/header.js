import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, ScrollView, Dimensions} from 'react-native';

const FIRSTCARD_WIDTH = Dimensions.get('window').width * 0.6;
const OTHERCARD_WIDTH = Dimensions.get('window').width * 0.4;
const CARD_HEIGHT = Dimensions.get('window').height * 0.3;

class HeaderScroll extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                showHorizontalScrollIndicator={false}
                indicatorStyle={undefined}
                contentContainerStyle={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                }}>
                <View style={styles.view}>
                    <Text style={{fontSize: 7, marginTop: 10, marginLeft: 10, color: 'silver'}}>Top Sellers</Text>
                    <View style={styles.container}>
                        <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}} style={{
                            height: 36, // change these values according to your requirement.
                            width: 36,
                            borderRadius: 18,
                        }}
                        />
                        <Text style={{marginLeft: 10}}>User Name</Text>
                    </View>
                    <Text style={{fontSize: 7, marginTop: 10, marginLeft: 10, color: 'silver'}}>Top byers</Text>
                    <View style={styles.container}>
                        <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}} style={{
                            height: 36, // change these values according to your requirement.
                            width: 36,
                            borderRadius: 18,
                        }}
                        />
                        <Text style={{marginLeft: 10}}>User Name</Text>
                    </View>
                </View>
                <View style={styles.view1}>
                    <View style={{
                        width: OTHERCARD_WIDTH,
                        height: CARD_HEIGHT,
                        borderRadius: 10,
                        backgroundColor: 'black',
                    }}>
                        <Text style={{fontSize: 14, marginTop: 10, marginLeft: 10}}>New World</Text>
                        <Text style={{fontSize: 7, marginLeft: 10, color: 'silver'}}>By F</Text>
                    </View>
                </View>
                <View style={styles.view1}>
                    <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}}
                           style={{
                               height: CARD_HEIGHT,
                               width: OTHERCARD_WIDTH,
                               borderRadius: 18,
                           }}/>
                </View>
                <View style={styles.view1}>
                    <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}}
                           style={{
                               height: CARD_HEIGHT,
                               width: OTHERCARD_WIDTH,
                               borderRadius: 18,
                           }}/>
                </View>
                <View style={styles.view1}>
                    <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}}
                           style={{
                               height: CARD_HEIGHT,
                               width: OTHERCARD_WIDTH,
                               borderRadius: 18,
                           }}/>
                </View>
                <View style={styles.view1}>
                    <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}}
                           style={{
                               height: CARD_HEIGHT,
                               width: OTHERCARD_WIDTH,
                               borderRadius: 18,
                           }}/>
                </View>
            </ScrollView>
        );
    }
}

export default HeaderScroll

const styles = StyleSheet.create({
    view: {
        flexDirection: "column",
        marginTop: 5,
        marginBottom: 5,
        width: FIRSTCARD_WIDTH,
        backgroundColor: 'silver',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,

    },
    container: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        marginLeft: 10,
        marginTop: 5,
    },

    view1: {
        flexDirection: "column",
        marginLeft: 5,
        marginTop: 5,
        height: CARD_HEIGHT,
        width: OTHERCARD_WIDTH,
        backgroundColor: '#212121',
        borderRadius: 10,
    },
});
