import React, {PureComponent} from "react";
import styled from "styled-components";
import {View, Dimensions, ScrollView, StyleSheet} from "react-native";
import Orientation from "react-native-orientation-locker";
import HeaderScroll from "./header.js";
import ContentScroll from "./card.js"

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
                {/*кароч це треба в вю опернуть бо нижній контент небачить його висоти в налазить на гору*/}
                <View style={{height: 170, borderWidth: 1}}>
                    <HeaderScroll/>
                </View>
                <ScrollView>
                    <View style={{height: 500, borderBottomWidthWidth: 1,}}>
                        <ContentScroll/>
                    </View>
                    <View style={{height: 500, borderBottomWidthWidth: 1}}>
                        <ContentScroll/>
                    </View>
                    <View style={{height: 500, borderBottomWidthWidth: 1}}>
                        <ContentScroll/>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #212121;
`;

