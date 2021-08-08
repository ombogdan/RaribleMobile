import React, { PureComponent } from "react";
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class ContactScreen extends PureComponent {
  getSeller(type) {
    console.log(type);
  }

  render() {
    let { navigation } = this.props;
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: Dimensions.get("window").height }}>
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
          <Text style={{ right: 24, fontSize: 20, fontWeight: "bold" }}>Contacts</Text>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <Text />
          </TouchableOpacity>
        </View>
        <View style={{ height: 20, backgroundColor: "#dedede" }} />

        <View>
          <View style={{ height: 100, paddingLeft: 24, paddingRight: 24, alignItems: "center", flexDirection: "row" }}>
            <Image source={require("../../assets/profile1.jpg")} style={{ width: 50, height: 50, borderRadius: 50 }} />
            <View style={{ paddingLeft: 16 }}>
              <Text style={{ fontSize: 15 }}>Vitalina Plichko</Text>
            </View>

          </View>
          <View style={{ paddingLeft: 24, paddingRight: 24, bottom: 24 }}>
            <Text>I am a graphic designer / artist who develops graphics for use in media products such as magazines,
              labels, advertisements and signs.</Text>
          </View>
        </View>

        <View style={{ height: 20, backgroundColor: "#dedede" }} />

        <View style={{ paddingLeft: 24, paddingRight: 24 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, top: 10 }}>Here is the seller`s contacts</Text>
          <TouchableOpacity onPress={() => {
            this.getSeller("telegram");
          }} style={{ flexDirection: "column", justifyContent: "space-between", paddingTop: 24 }}>
            <View style={{
              borderRadius: 8,
              height: 44,
              alignItems: "center",
              borderColor: "#007AFF",
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <EvilIcons name={"sc-telegram"} size={35} style={{ paddingLeft: 19 }} />
                <Text style={{ paddingLeft: 19 }}>Telegram</Text>
              </View>
              <FontAwesome5 name={"external-link-alt"} size={18} style={{ paddingRight: 10 }} />
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.getSeller("viber");
          }} style={{ flexDirection: "column", justifyContent: "space-between", paddingTop: 24 }}>
            <View style={{
              borderRadius: 8,
              height: 44,
              alignItems: "center",
              borderColor: "#007AFF",
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Fontisto name={"viber"} size={30} style={{ paddingLeft: 19 }} />
                <Text style={{ paddingLeft: 25 }}>Viber</Text>
              </View>
              <FontAwesome5 name={"external-link-alt"} size={18} style={{ paddingRight: 10 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.getSeller("phone");
          }} style={{ flexDirection: "column", justifyContent: "space-between", paddingTop: 24 }}>
            <View style={{
              borderRadius: 8,
              height: 44,
              alignItems: "center",
              borderColor: "#007AFF",
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name={"phone-call"} size={30} style={{ paddingLeft: 19 }} />
                <Text style={{ paddingLeft: 25 }}>Phone</Text>
              </View>
              <FontAwesome5 name={"external-link-alt"} size={18} style={{ paddingRight: 10 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.getSeller("mail");
          }} style={{ flexDirection: "column", justifyContent: "space-between", paddingTop: 24 }}>
            <View style={{
              borderRadius: 8,
              height: 44,
              alignItems: "center",
              borderColor: "#007AFF",
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name={"mail"} size={30} style={{ paddingLeft: 19 }} />
                <Text style={{ paddingLeft: 25 }}>Mail</Text>
              </View>
              <FontAwesome5 name={"external-link-alt"} size={18} style={{ paddingRight: 10 }} />
            </View>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
}
