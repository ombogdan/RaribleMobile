import React, {PureComponent} from "react";
import styled from "styled-components";
import {View, Dimensions, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from "react-native";
import Orientation from "react-native-orientation-locker";
import { Avatar } from 'react-native-elements';
const {width} = Dimensions.get('window');

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
        return <Container>
            <ScrollView
                horizontal={true}
                showHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}>
                <View style={styles.view}
                    <View style={{  alignItems: 'center',  }} >
                        <Text>Top Sellers</Text>
                         <Avatar
                          size={96}
                          rounded
                          source={{ uri:  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
                          containerStyle={styles.avatarContainer}>
                        <Avatar.Accessory
                            name="pencil-alt"
                            type="font-awesome-5"
                            size={16}
                        />
                    </Avatar>
                </View>
                <View style={styles.view1}></View>
                <View style={styles.view1}></View>
                <View style={styles.view1}></View>
                <View style={styles.view1}></View>
                <View style={styles.view1}></View>
            </ScrollView>
            <ScrollView
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
            </ScrollView>
        </Container>;

    }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
  backgroundColor: black 
`;
const styles = StyleSheet.create({
    scrollView: {
        height: Dimensions.get('window').height,
    },
    view: {
        flexDirection: "row",
        height: 200,
        width: 200,
        backgroundColor: "silver",
        borderRadius: 10
    },
    view1: {
        height: 200,
        width: 200,
        backgroundColor: "gray",
        borderRadius: 10
    },
    view2: {
        height: 400,
        backgroundColor: "gray",
        borderRadius: 10,
        padding: 10
    },
})