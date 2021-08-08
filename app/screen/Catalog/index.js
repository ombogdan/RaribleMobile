import React, { PureComponent } from "react";
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import _ from "lodash";

const typeOfProductList = [
  { _id: 1, name: "Outerwear" },
  { _id: 2, name: "Dress" },
  { _id: 3, name: "Skirt" },
  { _id: 4, name: "T-shirt" },
  { _id: 5, name: "Sweaters" },
  { _id: 5, name: "Shoes" },
];
export default class Catalog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: props.route.params?.type ?? "",
      data: props.route.params?.data ?? [],
    };
  }

  render() {
    let { navigation } = this.props;
    let { type, data } = this.state;
    return (
      <SafeAreaView style={{ height: Dimensions.get("window").height, backgroundColor: "white" }}>
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
          <Text style={{ right: 24, fontSize: 19, fontWeight: "bold" }}>{type}</Text>
          <Text />
        </View>

        {_.orderBy(typeOfProductList).map(item => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("ProductList", {name: item.name, productList: data });
          }} style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 24,
            paddingLeft: 24,
            paddingBottom: 16,
          }}>
            <View>
              <Text style={{ fontSize: 19 }}>{item.name}</Text>
            </View>
            <Ionicons name={"ios-chevron-forward"} size={28} />
          </TouchableOpacity>
        ))}

      </SafeAreaView>
    );
  }
}
