import React, { PureComponent } from "react";
import HomeScreen from "./index";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AddNewScreen from "../addNew";
import Feather from "react-native-vector-icons/Feather";
import ProfileScreen from "../profile";
import CorporateScreen from "../../screen/corporateScreen/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default class NavigatorIndex extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      vipList: [
        {
          name: "T-shirt",
          path: require("../../assets/test-t-short.png"),
          price: 24,
          size: "S",
          color: "green",
          city: "Cherkassy",
          typeOfProduct: "T-shirt",
          description: "Only for online boutiques. A short-sleeved T-shirt with the designed Y's Cotton Y's logo, which are expressed in a three-dimensional print like hand stitching, give a style that has a strong presence even in casual T-shirts. Enjoy a relaxed and chic style at home or on the go.",
        },
        {
          name: "Pullover",
          path: require("../../assets/yellow-pullover.jpg"),
          price: 24,
          size: "M",
          color: "yellow",
          city: "Cherkassy",
          typeOfProduct: "Sweaters",
          description: "Just enough slouch to feel cozy yet look effortless. Pair with The Jogger for a casual all-day uniform. Shop the full collection here.",
        },
        {
          name: "Сostume",
          path: require("../../assets/costume.jpeg"),
          price: 24,
          size: "L",
          color: "red",
          city: "Cherkassy",
          typeOfProduct: null,
          description: "Costume is the distinctive style of dress or cosmetic of an individual or group that reflects class, gender, profession, ethnicity, nationality, activity or epoch. In short costume is a cultural visual of the people.",
        },
        {
          name: "Yellow t-shirt",
          path: require("../../assets/t-shirt2.jpeg"),
          price: 24,
          size: "XL",
          color: "white",
          city: "Cherkassy",
          typeOfProduct: "Sweaters",
          description: "Only for online boutiques. A short-sleeved T-shirt with the designed Y's Cotton Y's logo, which are expressed in a three-dimensional print like hand stitching, give a style that has a strong presence even in casual T-shirts. Enjoy a relaxed and chic style at home or on the go.",
        }, {
          name: "Small dress",
          path: require("../../assets/dress1.jpeg"),
          price: 240,
          size: "M",
          color: "yellow",
          city: "Kyiv",
          typeOfProduct: "Dress",
          description: "Only for online boutiques. A short-sleeved T-shirt with the designed Y's Cotton Y's logo, which are expressed in a three-dimensional print like hand stitching, give a style that has a strong presence even in casual T-shirts. Enjoy a relaxed and chic style at home or on the go.",
        },
      ],
      freeList: [
        { name: "Yellow t-shirt", path: require("../../assets/t-shirt2.jpeg"), price: 0 },
        {
          name: "T-shirt",
          size: "XXL",
          color: "white",
          city: "Cherkassy",
          path: require("../../assets/test-t-short.png"),
          price: 0,
          typeOfProduct: "T-shirt",
          description: "Only for online boutiques. A short-sleeved T-shirt with the designed Y's Cotton Y's logo, which are expressed in a three-dimensional print like hand stitching, give a style that has a strong presence even in casual T-shirts. Enjoy a relaxed and chic style at home or on the go.",
        },
        {
          name: "Pullover",
          size: "L",
          city: "Cherkassy",
          color: "yellow",
          path: require("../../assets/yellow-pullover.jpg"),
          price: 0,
          typeOfProduct: "Sweaters",
          description: "Just enough slouch to feel cozy yet look effortless. Pair with The Jogger for a casual all-day uniform. Shop the full collection here.",
        },
        {
          name: "Сostume",
          size: "M",
          city: "Cherkassy",
          color: "red",
          path: require("../../assets/costume.jpeg"),
          price: 24,
          typeOfProduct: null,
          description: "Costume is the distinctive style of dress or cosmetic of an individual or group that reflects class, gender, profession, ethnicity, nationality, activity or epoch. In short costume is a cultural visual of the people.",
        },
      ],
    };
  }

  addNewItem(item, type) {
    let { vipList, freeList } = this.state;
    if (type === "free") {
      freeList.push(item);
    } else {
      vipList.push(item);
    }
    this.setState({ vipList: vipList, freeList: freeList });
  }

  getList() {
    let { vipList, freeList } = this.state;
    return {
      vipList: vipList,
      freeList: freeList,
    };
  }

  render() {
    let { vipList, freeList } = this.state;
    return (
      <Tab.Navigator initialRouteName="HomeScreen"
                     tabBarOptions={{ activeTintColor: "dodgerblue", activeBackgroundColor: "whitesmoke" }}>
        <Tab.Screen name={"HomeScreen"} component={HomeScreen}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name={"home"} color={color} size={30} style={{ top: 5 }} />),
                      tabBarLabel: "",
                    }}
                    initialParams={{
                      vipList: vipList,
                      freeList: freeList,
                      getList: this.getList.bind(this),
                      addNewItem: this.addNewItem.bind(this),
                    }} />
        <Tab.Screen name={"AddingScreen"} component={AddNewScreen}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <Feather name={"plus-circle"} color={color} size={30} style={{ top: 5 }} />),
                      tabBarLabel: "",
                    }}
                    initialParams={{
                      vipList: vipList,
                      freeList: freeList,
                      getList: this.getList.bind(this),
                      addNewItem: this.addNewItem.bind(this),
                    }} />

        <Tab.Screen name={"CorporateScreen"} component={CorporateScreen}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <MaterialIcons name={"corporate-fare"} color={color} size={30} style={{ top: 5 }} />),
                      tabBarLabel: "",
                    }} />
        <Tab.Screen name={"ProfileScreen"} component={ProfileScreen}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <Feather name={"user"} color={color} size={30} style={{ top: 5 }} />),
                      tabBarLabel: "",
                    }}
                    initialParams={{
                      vipList: vipList,
                    }} />
        {/*<Tab.Screen name={"HistoryScreen1"} component={ProfileScreen}*/}
        {/*            options={{*/}
        {/*              tabBarIcon: ({ color }) => (*/}
        {/*                <MaterialIcons name={"history-edu"} color={color} size={30} />),*/}
        {/*              tabBarLabel: t("appName"),*/}
        {/*            }} />*/}
      </Tab.Navigator>
    );
  }
}
