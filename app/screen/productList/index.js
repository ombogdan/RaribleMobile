import React, { PureComponent } from "react";
import styled from "styled-components";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Orientation from "react-native-orientation-locker";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import _ from "lodash";

export default class SearchScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: props?.route?.params?.name ?? "",
      type: props?.route?.params?.type ?? "",
      productList: props?.route?.params?.productList ?? [],
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

  goToFilter() {
    let { navigation } = this.props;
    navigation.navigate("FilterScreen");
  }

  goToDetailInfo(item) {
    let { navigation } = this.props;
    navigation.navigate("ProductDetailScreen", { item: item });
  }


  render() {
    let { name, productList, type } = this.state;
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
          <Text />
        </View>

        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            {_.orderBy(productList).map(item => (
              <>
                {name === "Buy" || name === "Free" || name=== item.typeOfProduct ?
                  <TouchableOpacity onPress={() => {
                    this.goToDetailInfo(item);
                  }} style={{ marginBottom: 10, margin: 10 }}>
                    {item.newItem === true ?
                      <Image
                        style={{ height: 145, width: 154 }}
                        source={{ uri: `file://${item.path}` }}
                      />
                      :
                      <Image source={item.path} style={{ width: 154, height: 145 }} />
                    }
                    {!item.price || item.price === 0 ?
                      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>Free</Text>
                      :
                      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>{item.price} UAH</Text>
                    }
                    <Text style={{ fontSize: 14 }}>{item.name}</Text>
                  </TouchableOpacity>
                  : null
                }
              </>
            ))}
          </View>
          <View style={{ height: 120 }} />
        </ScrollView>
        <TouchableOpacity onPress={() => {
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
  height: ${Dimensions.get("window").height}px;
`;
