import React, {PureComponent} from "react";
import styled from "styled-components";
import {View, Dimensions, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from "react-native";
import Orientation from "react-native-orientation-locker";
import HeaderScroll from './header.js'

const CARD_HEIGHT = Dimensions.get('window').height * 0.3;
const POST_WIDTH = Dimensions.get("window").width;


export default class HomeScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _unsubscribe() {
    }

    async componentDidMount() {
        console.log("Mount in agroOperation Screen");
        //Orientation
        Orientation.unlockAllOrientations();
        Orientation.getOrientation(orientation => {
            this.setState({orientation: orientation});
        });
        Dimensions.addEventListener("change", () => {
            Orientation.getOrientation(orientation => {
                this.setState({orientation: orientation});
            });
        });
        //------------

    }

    componentWillUnmount() {
        console.log("Unmount in agroOperation Screen");
        this._unsubscribe();
    }


    render() {
        let {} = this.state;

        let {} = this.props;
        return (
            <Container>
                <HeaderScroll/>
                <View></View>
                <ScrollView
                    contentContainerStyle={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        paddingTop: 2,
                    }}>
                    <View style={styles.item}>
                        <View style={styles.cardHeader}>
                            <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}} style={{
                                height: 36, // change these values according to your requirement.
                                width: 36,
                                borderRadius: 18,
                            }}
                            />
                            <Text style={{marginLeft: 10}}>User Name</Text>
                        </View>
                    </View>
                    <View style={styles.item}></View>
                    <View style={styles.item}></View>
                    <View style={styles.item}></View>
                    <View style={styles.item}></View>
                </ScrollView>
            </Container>
        );
    }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
  backgroundColor: black
`;
const styles = StyleSheet.create({
    item: {
        flex: 1,
        top: 200,
        height: 400,
        width: '100%',
        backgroundColor: "gray",
        borderRadius: 10,
        borderWidth: 1,
    },
    cardHeader: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        backgroundColor: 'silver',
    },
});