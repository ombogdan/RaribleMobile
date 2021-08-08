import React, { PureComponent } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class ProductDetailScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: props?.route?.params?.item ?? {},
    };
  }

  goToContact() {
    let { navigation } = this.props;
    navigation.navigate("ContactScreen");

  }

  render() {
    let { navigation } = this.props;
    let { item } = this.state;
    return (
      <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
        <ScrollView>
          <View style={{ height: 375, backgroundColor: "#dedede" }}>
            <View style={{
              height: 60,
              justifyContent: "flex-start",
              flexDirection: "row",
              paddingLeft: 24,
              alignItems: "center",
            }}>
              <TouchableOpacity onPress={() => {
                navigation.goBack();
              }}>
                <MaterialIcons name={"arrow-back-ios"} size={28} />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              {item.newItem === true ?
                <Image
                  style={{ height: 350, width: 200, bottom: 45 }}
                  source={{ uri: `file://${item.path}` }}
                />
                :
                <Image source={item.path} style={{ width: 200, height: 350, bottom: 45 }} />
              }
            </View>
          </View>

          <View style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 16 }}>
            <View>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Text style={{ fontSize: 16 }}>{item.description}</Text>
            </View>
            <View style={{
              paddingTop: 10,
              backgroundColor: "white",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <TouchableOpacity onPress={() => {
                this.goToContact();
              }}>
                <View style={{
                  borderRadius: 4,
                  backgroundColor: "#007AFF",
                  height: 40,
                  width: Dimensions.get("window").width * 0.8,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>How to get it</Text>
                </View>
              </TouchableOpacity>
              <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingBottom: 12,
                backgroundColor: "white",
                width: Dimensions.get("window").width,
              }}>
                <Text style={{ fontSize: 17 }}>Size</Text>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.size}</Text>
              </View>
              <View style={{ height: 1, width: "100%", backgroundColor: "silver" }} />
              <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingBottom: 12,
                backgroundColor: "white",
                width: Dimensions.get("window").width,
              }}>
                <Text style={{ fontSize: 17 }}>City</Text>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.city}</Text>
              </View>
              <View style={{ height: 1, width: "100%", backgroundColor: "silver" }} />
              <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingBottom: 12,
                backgroundColor: "white",
                width: Dimensions.get("window").width,
              }}>
                <Text style={{ fontSize: 17 }}>Color</Text>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.color}</Text>
              </View>
              <View style={{ height: 1, width: "100%", backgroundColor: "silver" }} />
              <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingBottom: 12,
                backgroundColor: "white",
                width: Dimensions.get("window").width,
              }}>
                <Text style={{ fontSize: 17 }}>Price</Text>
                {item.price ?
                  <Text style={{fontSize: 17, fontWeight: "bold" }}>{item.price} UAH</Text>
                  :
                  <Text style={{ fontSize: 17, fontWeight: "bold" }}>Free</Text>
                }
              </View>
              <View style={{ height: 1, width: "100%", backgroundColor: "silver" }} />

              <View style={{
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingBottom: 12,
                backgroundColor: "white",
                width: Dimensions.get("window").width,
              }}>
                <Text style={{ fontSize: 17 }}>Last update</Text>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>03 July 2021</Text>
              </View>
              <View style={{ height: 1, width: "100%", backgroundColor: "silver" }} />
            </View>
          </View>
          <View style={{ height: 400 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
