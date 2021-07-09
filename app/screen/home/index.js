import React, { PureComponent, Component } from "react";
import styled from "styled-components";
import {     StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions } from "react-native";
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
    //------
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
     <View style={styles.headercontainer}>
       <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"center"}>
          <Text style={styles.storyicon1}> Welcome to React Native</Text>
          <Text style={styles.storyicon2}> Welcome to React Native</Text>
          <Text style={styles.storyicon1}> Welcome to React Native</Text>
        </ScrollView>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={width - 10}
        snapToAlignment={"center"}>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
          <Text style={styles.posticon}>Welcome to React Native</Text>
        </ScrollView>
      </View>
     </Container>
    );
  }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1
  backgroundColor: lightgrey
`;


const styles = StyleSheet.create({
  headercontainer: {
    flex: 2,
    flexDirection:'column',
  },
  storyicon1: {
    flex: 1,
    width: 120,
    height: 50,
    flexBasis: 60,
    backgroundColor:'powderblue'
  },
  storyicon2: {
    width: 120,
    height: 50,
    backgroundColor:'skyblue'
  },
  posticon: {
    flex: 2,
    margin: 20,
    backgroundColor: 'silver',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});