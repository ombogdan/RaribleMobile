import React, { PureComponent } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CustomSearchBar from "../SearchBar";

export default class SearchScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  render() {
    let { navigation } = this.props;
    let { search } = this.state;
    return (
      <SafeAreaView>
        <View style={{flexDirection: "column", padding: 24 }}>
          <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => {
               navigation.goBack();
             }}>
               <MaterialIcons name={"arrow-back-ios"} size={28} />
            </TouchableOpacity>
            <CustomSearchBar
              placeholder={"Search"}
              updateSearch={this.updateSearch}
              value={search}
            />
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ }}>
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
            <View style={{ backgroundColor: "#F2F2F2", marginLeft: 10, borderRadius: 17 }}>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>House</Text>
            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    );
  }
}
