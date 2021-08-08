import React, { PureComponent } from "react";
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import _ from "lodash";

const Data = [{
  name: "Н&М",
  description: "H&M stores are ready to accept products of any brand." +
    " Swedish brand of clothing and cosmetics, the distinguishing feature of which is fashionable and quality clothing at affordable prices. Headquartered in Stockholm.",
  path: require("../../assets/hm.jpeg"),
}, {
  name: "Monki",
  description: "Monki branded stores work with a 10% discount. The Monki brand is engaged in the production of extraordinary youth clothing and footwear, designed primarily for teenage girls. The range of the brand includes the entire basic wardrobe in a casual style with original prints.",
  path: require("../../assets/monki.jpeg"),

}, {
  name: "Uniqlo",
  description: "Uniqlo accepts only its own brand and only clean, tidy things.  Japanese retail chain of casual wear \"for all\". Owned by the Japanese holding Fast Retailing Co",
  path: require("../../assets/uniglo.jpeg"),
},
];
export default class CorporateScreen extends PureComponent {
  goToDetail(item) {
    let { navigation } = this.props;
    navigation.navigate("DetailCorporationScreen", { item: item });
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: Dimensions.get("window").height }}>
        <View style={{
          height: 50,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "#fbfbfb",
          opacity: 10,
          paddingLeft: 24,
          paddingRight: 24,
        }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Clothes for you</Text>
          <AntDesign name={"search1"} size={28} />
        </View>
        <View style={{ height: 20, backgroundColor: "#EBEBEB" }} />
        {_.orderBy(Data).map(item => (
          <>
            <TouchableOpacity onPress={() => {
              this.goToDetail(item);
            }} style={{ paddingTop: 12, paddingBottom: 12 }}>
              <View style={{ flexDirection: "row", paddingLeft: 24, alignItems: "center", height: 60 }}>
                <Image source={item.path} style={{ width: 50, height: 50, borderRadius: 50 }} />

                <Text style={{ paddingLeft: 24, fontSize: 20 }}>{item.name}</Text>
              </View>
              <View style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 10 }}>
                <Text>{item.description}</Text>
              </View>
              <View style={{ height: 20, backgroundColor: "white" }} />
            </TouchableOpacity>
            <View style={{ height: 20, backgroundColor: "#EBEBEB" }} />
          </>
        ))}
      </SafeAreaView>
    );
  }
}
