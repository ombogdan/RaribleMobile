import React, { PureComponent } from "react";
import styled from "styled-components";
import { View, Dimensions, Text, ScrollView, StyleSheet } from "react-native";
import Orientation from "react-native-orientation-locker";

const { width } = Dimensions.get('window');

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
    Orientation.getOrientation((orientation) => {
      this.setState({ orientation: orientation });
    });
    Dimensions.addEventListener("change", () => {
      Orientation.getOrientation((orientation) => {
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
   
    let { } = this.props;
    return (
      <Container>
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showHorizontalScrollIndicator={false}
            decelerationRate='fast'
            contentContainerStyle={{FlexDirection : 'row',
            justifyContent : 'flex-start', 
            height: '99%'}}>
              <View style={styles.scrollViewContainer1}></View>
              <View style={styles.scrollViewContainer2}></View>
              <View style={styles.scrollViewContainer1}></View>
              <View style={styles.scrollViewContainer2}></View>
              <View style={styles.scrollViewContainer1}></View>
              <View style={styles.scrollViewContainer2}></View>
        </ScrollView>
        <ScrollView horizontal={false}
            contentContainerStyle={{flexDirection : 'column',
            justifyContent : 'center',
            width: '100%'}}>
              <View style={styles.scrollViewContainer3}></View>
              <View style={styles.scrollViewContainer4}></View>
              <View style={styles.scrollViewContainer3}></View>
              <View style={styles.scrollViewContainer4}></View>
              <View style={styles.scrollViewContainer3}></View>
              <View style={styles.scrollViewContainer4}></View>
        </ScrollView>
      </Container>
    );
  }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1

  backgroundColor: gray

`;
const styles = StyleSheet.create({
  scrollView: {
    height : Dimensions.get('window').height,
  }, 
  scrollViewContainer1: { 
    height: 200,
    width: 200,
    backgroundColor: "silver",
    borderRadius: 10
  },
  scrollViewContainer2: { 
    height: 200,
    width: 200,
    backgroundColor: "gray",
    borderRadius: 10
  },
  scrollViewContainer3: {
    height: 400,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10
  },
  scrollViewContainer4: {
    height: 400,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10
  }, 
  })