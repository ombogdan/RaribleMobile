import React, { PureComponent } from "react";
import styled from "styled-components";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Orientation from "react-native-orientation-locker";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loginned: false,
    };
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

  goToList(type) {
    let { navigation } = this.props;
    navigation.navigate("ProductList", { name: type });

  }


  render() {
    let {} = this.props;
    return (
      <Container>
        <View style={{ height: 100, flexDirection: "column", justifyContent: "center", padding: 24 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Wears For You</Text>
              <AntDesign name={"search1"} size={28} />
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ top: 10 }}>
            <View style={{ borderRadius: 17, backgroundColor: "#F2F2F2" }}>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>Catalog</Text>
            </View>
            <View style={{ backgroundColor: "#F2F2F2", marginLeft: 10, borderRadius: 17 }}>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>Man</Text>
            </View>
            <View style={{ backgroundColor: "#F2F2F2", marginLeft: 10, borderRadius: 17 }}>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>Woman</Text>
            </View>
            <View style={{ backgroundColor: "#F2F2F2", marginLeft: 10, borderRadius: 17 }}>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>Children</Text>
            </View>
            <View style={{ backgroundColor: "#F2F2F2", marginLeft: 10, borderRadius: 17 }}>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>Beauty</Text>
            </View>
          </ScrollView>
        </View>

        <View style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 10 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20 }}>VIP</Text>
            <TouchableOpacity onPress={() => {
              this.goToList("VIP");
            }}>
            <MaterialIcons name={"arrow-forward-ios"} size={28} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
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
          </ScrollView>
        </View>

        <View style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 10 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20 }}>Free</Text>
            <TouchableOpacity onPress={() => {
              this.goToList("Free");
            }}>
              <MaterialIcons name={"arrow-forward-ios"} size={28} />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
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
          </ScrollView>
        </View>
      </Container>
    );
  }
}

//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

