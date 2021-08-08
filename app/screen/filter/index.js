import React, { PureComponent } from "react";
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import i18n from "../../locales/index";

const { t } = i18n;
export default class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  confirmFilter() {
    let { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    let { navigation } = this.props;
    let { city } = this.state;
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
          <Text style={{ right: 24, fontSize: 20, fontWeight: "bold" }}>Filters</Text>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <Text style={{ color: "red", right: 15 }}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "#f2f2f2", height: 20 }} />

        <View style={{}}>
          <Text style={{ left: 24, fontSize: 16, top: 8 }}>Size</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => {

            }} style={{ marginTop: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>42</Text>
                <Text style={{ fontSize: 16 }}>XXS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>44</Text>
                <Text style={{ fontSize: 16 }}>XS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>46</Text>
                <Text style={{ fontSize: 16 }}>S</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>48</Text>
                <Text style={{ fontSize: 16 }}>M</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>50</Text>
                <Text style={{ fontSize: 16 }}>L</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>52</Text>
                <Text style={{ fontSize: 16 }}>XL</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>54-56</Text>
                <Text style={{ fontSize: 16 }}>XXL</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }}>
              <View style={{
                margin: 10,
                width: 70,
                height: 54,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "silver",
              }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 3 }}>58-60</Text>
                <Text style={{ fontSize: 16 }}>XXXL</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{ backgroundColor: "#f2f2f2", height: 20 }} />
        <View style={{ marginTop: 5 }}>
          <Text style={{ left: 24, fontSize: 16, top: 8 }}>{t("city")}</Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              value={city}
              onChangeText={(login) => this.setState({ login })}
              placeholder={t("city")}
              style={{
                width: "90%",
                padding: 10,
                borderBottomWidth: 1,
                borderColor: "silver",
                marginBottom: 10,
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center",
              }}
            />
          </View>
        </View>

        <View style={{ backgroundColor: "#f2f2f2", height: 20 }} />

        <View style={{ marginTop: 20 }}>
          <Text style={{ left: 24, fontSize: 16, top: 8, marginBottom: 16 }}>Color</Text>
          <View style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "yellow", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "blue", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "red", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "green", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "brown", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "black", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "khaki", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "coral", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "indigo", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "maroon", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "crimson", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "lime", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "orange", margin: 10 }} />
            <View style={{ height: 33, width: 33, borderRadius: 50, backgroundColor: "magenta", margin: 10 }} />
          </View>
        </View>

        <View style={{
          backgroundColor: "white",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: 290,
          alignItems: "center",
        }}>
          <TouchableOpacity onPress={() => {
            this.confirmFilter();
          }} style={{ paddingBottom: 30 }}>
            <View style={{
              borderRadius: 14,
              backgroundColor: "#007AFF",
              height: 40,
              width: Dimensions.get("window").width * 0.8,
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Show</Text>
            </View>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
}
