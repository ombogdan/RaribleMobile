import React, { PureComponent } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import i18n from "../../locales/index";
import { NavigationContainer } from "@react-navigation/native";
import ActivityScreen from "../../screen/activity/index";
import AddNewScreen from "../../screen/addNew/index";
import SearchScreen from "../../screen/search/index";
import ProfileScreen from "../../screen/profile/index";
import HomeScreen from "../../screen/home/index";
import { keyValueActions } from "../../storage/realm";
import Login from "../../screen/Login";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";
const Tab = createBottomTabNavigator();
export default class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: keyValueActions.getValue('loginned') ? keyValueActions.getValue('loginned') !== '' : false
    }
  }
  update() {
    this.setState({ login: keyValueActions.getValue("loginned") ? keyValueActions.getValue("loginned") !== "" : false });
  }

  render() {
    let { login } = this.state;

    return (
      <NavigationContainer>
        {login ?
          <Tab.Navigator initialRouteName="HomeScreen"
                         tabBarOptions={{ activeTintColor: "dodgerblue", activeBackgroundColor: "whitesmoke" }}>
            <Tab.Screen name={"HomeScreen"} component={HomeScreen}
                        options={{
                          tabBarIcon: ({ color }) => (<SimpleLineIcons name={"home"} color={color} size={30} style={{top:5}} />),
                          tabBarLabel: '',
                        }} />
            <Tab.Screen name={"AddingScreen"} component={AddNewScreen}
                        options={{
                          tabBarIcon: ({ color }) => (<Feather name={"plus-circle"} color={color} size={30} style={{top:5}} />),
                          tabBarLabel: '',
                        }} />
            <Tab.Screen name={"ProfileScreen"} component={ProfileScreen}
                        options={{
                          tabBarIcon: ({ color }) => (<Feather name={"user"} color={color} size={30} style={{top:5}}/>),
                          tabBarLabel: '',
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
          :
          <Login update={this.update.bind(this)}/>
        }
      </NavigationContainer>
    );
  }
}
