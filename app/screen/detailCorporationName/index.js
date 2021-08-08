import React, { PureComponent } from "react";
import { Dimensions, Image, Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MapViewAnimated, { Marker, Polygon, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { keyValueActions } from "../../storage/realm";
import debounce from "lodash/debounce";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const initialRegion = {
  latitude: 49.4404322,
  longitude: 32.0354407,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};
export default class DetailCorporationName extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props.route.params.item);
    this.state = {
      item: props.route?.params?.item ?? "",
      region: keyValueActions.getRegion() ? keyValueActions.getRegion() : initialRegion,

    };
  }

  onPressMap() {
    try {
      this.setState({
        selectedVehicle: null,
      });
    } catch (e) {
      this.showAlert(e.message);
    }
  };

  onRegionChange = debounce((region) => {
    let self = this;
    let zoom = Math.round(Math.log(360 / region["longitudeDelta"]) / Math.LN2);
    keyValueActions.setRegion(region).then(() => {
    });
    self.setState({
      zoom: zoom,
      region: region,
      pointList: {},
      centerVehicleOnMap: false,
      pointTrackObject: {},
    });
  }, 500);

  getSeller(name) {
    console.log(name);
  }

  render() {
    let { navigation } = this.props;
    let { item, region } = this.state;
    return (
      <SafeAreaView style={{ backgroundColor: "#EBEBEB", height: Dimensions.get("window").height }}>
        <View style={{
          height: 60,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 24,
          alignItems: "center",
          backgroundColor: 'white'

        }}>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
          }}>
            <MaterialIcons name={"arrow-back-ios"} size={28} />
          </TouchableOpacity>
          <Text style={{ right: 24, fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text />
        </View>

        <View style={{ height: 20, backgroundColor: "#EBEBEB" }} />

        <View style={{ backgroundColor: 'white'}}>
          <View style={{ flexDirection: "row", paddingLeft: 24, alignItems: "center", height: 60 }}>
            <Image source={item.path} style={{ width: 50, height: 50, borderRadius: 50 }} />

            <Text style={{ paddingLeft: 24, fontSize: 20 }}>{item.name}</Text>
          </View>
          <View style={{ paddingLeft: 24, paddingRight: 24, paddingBottom: 10 }}>
            <Text>{item.description}</Text>
          </View>
          <View style={{ height: 20, backgroundColor: "white" }} />
        </View>

        <View style={{ height: 20, backgroundColor: "#EBEBEB" }} />

        {/*<View style={{ paddingLeft: 24, paddingRight: 24, height: 300 }}>*/}
        {/*  <Text>Here is reception point</Text>*/}
        {/*  <MapViewAnimated*/}
        {/*    ref={(ref) => {*/}
        {/*      this.map = ref;*/}
        {/*    }}*/}
        {/*    provider={PROVIDER_GOOGLE}*/}
        {/*    style={{*/}
        {/*      position: 'absolute',*/}
        {/*      top:  0,*/}
        {/*      height: 300,*/}
        {/*      left: 0,*/}
        {/*      right: 0,*/}
        {/*      bottom: 0*/}
        {/*    }}*/}
        {/*    initialRegion={initialRegion}*/}
        {/*    region={{*/}
        {/*      latitude: 42.882004,*/}
        {/*      longitude: 74.582748,*/}
        {/*      latitudeDelta: 0.0922,*/}
        {/*      longitudeDelta: 0.0421,*/}
        {/*    }}*/}
        {/*    mapType={'hybrid'}*/}
        {/*    showsMyLocationButton={true}*/}
        {/*    showsUserLocation={true}*/}
        {/*    zoomEnabled={true}*/}
        {/*    onRegionChangeComplete={this.onRegionChange.bind(this)}*/}
        {/*    onPress={(event) => {*/}
        {/*      Platform.OS === 'android' ? this.onPressMap(event) : ''*/}
        {/*    }}*/}
        {/*  >*/}

        {/*  </MapViewAnimated>*/}
        {/*</View>*/}
        <View style={{ paddingLeft: 24, paddingRight: 24,  backgroundColor: 'white', paddingBottom: 24, paddingTop: 10 }}>
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
