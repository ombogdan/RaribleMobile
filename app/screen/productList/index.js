import React, { PureComponent } from "react";
import styled from "styled-components";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Orientation from "react-native-orientation-locker";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class SearchScreen extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props.route.params);
    this.state = {
      name: props?.route?.params?.name ?? "",
    };
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

  goToFilter(){
    let {navigation} = this.props;
    navigation.navigate('FilterScreen')
  }


  render() {
    let { name } = this.state;
    let { navigation } = this.props;
    return (
      <Container>
        <View style={{
          height: 60,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 24,
          alignItems: "center",
        }}>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <MaterialIcons name={"arrow-back-ios"} size={28} />
          </TouchableOpacity>
          <Text style={{ right: 24, fontSize: 20, fontWeight: "bold" }}>{name}</Text>
          <Text/>
        </View>

        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
            <View style={{ marginBottom: 10, margin: 10 }}>
              <Image source={require("../../assets/test-t-short.png")} style={{ width: 154, height: 145 }} />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>24грн</Text>
              <Text style={{ fontSize: 16 }}>T-shirt</Text>
            </View>
          </View>
          <View style={{ height: 120 }} />
        </ScrollView>
        <TouchableOpacity onPress={()=>{
          this.goToFilter();
        }} style={{
          position: "absolute",
          height: 34,
          width: 84,
          bottom: 80,
          left: Dimensions.get("screen").width * 0.4,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderRadius: 4,
        }}>
          <MaterialCommunityIcons name={"filter-variant"} size={30} />
          <Text>Filter</Text>

        </TouchableOpacity>

      </Container>
    );
  }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
`;
