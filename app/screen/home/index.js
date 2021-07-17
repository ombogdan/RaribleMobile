import React, { PureComponent } from "react";
import styled from "styled-components";
import { View, Dimensions, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import Orientation from "react-native-orientation-locker";
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderScroll from "./header.js";
import ContentScroll from "./card.js"

const CARD_HEIGHT = Dimensions.get("window").height * 0.3;
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
            this.setState({ orientation: orientation });
        });
        Dimensions.addEventListener("change", () => {
            Orientation.getOrientation(orientation => {
                this.setState({ orientation: orientation });
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
                {/*кароч це треба в вю опернуть бо нижній контент небачить його висоти в налазить на гору*/}
                <View style={{ height: 170 }}>
                    <HeaderScroll />
                </View>
                <View style={{ height: 400 }}>
                    <ContentScroll />
                </View>
            </Container>
        );
    }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #212121;
`;
const styles = StyleSheet.create({
    item: {
        height: 200,
        width: "100%",
        backgroundColor: "gray",
        borderRadius: 10,
        borderWidth: 1,
    },
    cardHeader: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        backgroundColor: "silver",
    },
});