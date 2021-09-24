import React, { PureComponent } from "react";
import HomeScreen from "./index";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AddNewScreen from "../addNew";
import Feather from "react-native-vector-icons/Feather";
import ProfileScreen from "../profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default class NavigatorIndex extends PureComponent{
  render() {
    return (
      <Tab.Navigator initialRouteName="HomeScreen"
                     tabBarOptions={{ activeTintColor: "dodgerblue", activeBackgroundColor: "whitesmoke" }}>
        <Tab.Screen name={"HomeScreen"} component={HomeScreen}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <SimpleLineIcons name={"home"} color={color} size={30} style={{ top: 5 }} />),
                      tabBarLabel: "",
                    }} />
        <Tab.Screen name={"AddingScreen"} component={AddNewScreen}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <Feather name={"plus-circle"} color={color} size={30} style={{ top: 5 }} />),
                      tabBarLabel: "",
                    }} />
        <Tab.Screen name={"ProfileScreen"} component={ProfileScreen}
                    options={{
                      tabBarIcon: ({ color }) => (
                        <Feather name={"user"} color={color} size={30} style={{ top: 5 }} />),
                      tabBarLabel: "",
                    }} />
        {/*<Tab.Screen name={"HistoryScreen"} component={ActivityScreen}*/}
        {/*            options={{*/}
        {/*              tabBarIcon: ({ color }) => (*/}
        {/*                <MaterialIcons name={"history-edu"} color={color} size={30} />),*/}
        {/*              tabBarLabel: t("appName"),*/}
        {/*            }} />*/}
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
