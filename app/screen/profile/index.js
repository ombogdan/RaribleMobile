import React, { PureComponent } from "react";
import styled from "styled-components";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import Orientation from "react-native-orientation-locker";
import i18n from "../../locales/index";
import { TabBar, TabView } from "react-native-tab-view";

let { t } = i18n;
export default class ProfileScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "aboutMe", title: t("aboutMe") },
        { key: "mySales", title: t("mySales") },
        { key: "myPurchases", title: t("myPurchases") },
      ],
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


  render() {
    let {} = this.state;

    let {} = this.props;
    let renderScene = ({ route }) => {
      switch (route.key) {
        case "aboutMe":
          return (<Text>aboutMe</Text>);
        case "mySales":
          return (
            <ScrollView>
              <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingTop: 10 }}>
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
            </ScrollView>
          );
        case "myPurchases":
          return (<Text>цукенг</Text>);
      }
    };

    return (
      <Container>
        <View style={{ height: 100, paddingLeft: 24, paddingRight: 24, alignItems: "center", flexDirection: "row" }}>
          <Image source={require("../../assets/profile.jpg")} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ paddingLeft: 16 }}>
            <Text style={{ fontSize: 15 }}>Bogdan Omelchenko</Text>
          </View>
        </View>
        <TabView
          // style={{top: (Platform.OS) === 'ios' ? 30 : 0}}
          keyboardDismissMode={"none"}
          navigationState={this.state}
          renderScene={renderScene}


          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get("window").width }}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "silver" }}
              style={{ backgroundColor: "white" }}
              activeColor={"black"}
              inactiveColor={"silver"}
              inactiveOpacity={0.5}
              activeOpacity={1.0}
              keyboardDismissMode={"none"}
            />
          }
        />
      </Container>
    );
  }
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
`;
