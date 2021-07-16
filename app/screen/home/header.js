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
                    <Text style={{fontSize: 7, marginTop: 10, marginLeft: 10}}>Top Sellers</Text>
                    <View style={styles.container}>
                        <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}} style={{
                            height: 36, // change these values according to your requirement.
                            width: 36,
                            borderRadius: 18,
                        }}
                        />
                        <Text style={{marginLeft: 10}}>User Name</Text>
                    </View>
                    <Text style={{fontSize: 7, marginTop: 10, marginLeft: 10}}>Top byers</Text>
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
        marginLeft: 10,
        marginTop: 20,
        height: CARD_HEIGHT,
        width: FIRSTCARD_WIDTH,
        backgroundColor: "silver",
        borderRadius: 10,
        flex: 1,
    },
    container: {
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        marginLeft: 8,
        marginTop: 8,
    },

    view1: {
        flexDirection: "column",
        marginLeft: 8,
        marginTop: 20,
        height: CARD_HEIGHT,
        width: OTHERCARD_WIDTH,
        backgroundColor: "silver",
        borderRadius: 10,
    },
});