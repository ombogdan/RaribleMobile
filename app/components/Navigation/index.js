import React, { PureComponent } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import i18n from "../../locales/index";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";
import {NavigationContainer} from "@react-navigation/native";
import ActivityScreen from "../../screen/activity/index";
import AddNewScreen from "../../screen/addNew/index";
import SearchScreen from "../../screen/search/index";
import ProfileScreen from "../../screen/profile/index";
import HomeScreen from "../../screen/home/index";

const Tab = createBottomTabNavigator();
let { t } = i18n;

export default class Navigation extends PureComponent {
  constructor() {
    super();
    this.state = {
      pendingLength: 0,
    };
  }


  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="BalanceScreen"
                       tabBarOptions={{ activeTintColor: "dodgerblue", activeBackgroundColor: "whitesmoke" }}>
          <Tab.Screen name={"BalanceScreen"} component={HomeScreen}
                      options={{
                        tabBarIcon: ({ color }) => (<Icon name={"chart-histogram"} color={color} size={30} />),
                        tabBarLabel: t("appName"),
                      }} />
          <Tab.Screen name={"RefuelingList"} component={SearchScreen}
                      options={{
                        tabBarIcon: ({ color }) => (<Icon name={"newspaper-plus"} color={color} size={30} />),
                        tabBarLabel: t("appName"),
                      }} />
          <Tab.Screen name={"FactOfUseRefuelingList"} component={AddNewScreen}
                      options={{
                        tabBarIcon: ({ color }) => (<Foundation name={"social-treehouse"} color={color} size={30} />),
                        tabBarLabel: t("appName"),
                      }} />
          <Tab.Screen name={"HistoryScreen"} component={ActivityScreen}
                      options={{
                        tabBarIcon: ({ color }) => (
                          <MaterialIcons name={"history-edu"} color={color} size={30} />),
                        tabBarLabel: t("appName"),
                      }} />
          <Tab.Screen name={"HistoryScreen1"} component={ProfileScreen}
                      options={{
                        tabBarIcon: ({ color }) => (
                          <MaterialIcons name={"history-edu"} color={color} size={30} />),
                        tabBarLabel: t("appName"),
                      }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
