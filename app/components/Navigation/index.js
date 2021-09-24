import React, { PureComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductListScreen from "../../screen/productList/index";
import HomeScreen from "../../screen/home/navigatorIndex";
import FilterScreen from "../../screen/filter/index";
import { keyValueActions } from "../../storage/realm";
import Login from "../../screen/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: keyValueActions.getValue("loginned") ? keyValueActions.getValue("loginned") !== "" : false,
    };
  }

  update() {
    this.setState({ login: keyValueActions.getValue("loginned") ? keyValueActions.getValue("loginned") !== "" : false });
  }

  Drawer() {

  }

  render() {
    let { login } = this.state;
    return (
      <NavigationContainer>
        {login ?
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}
                          options={{ headerShown: false }} />
            <Stack.Screen name="ProductList" component={ProductListScreen}
                          options={{ headerShown: false }} />
            <Stack.Screen name="FilterScreen" component={FilterScreen}
                          options={{ headerShown: false }} />
          </Stack.Navigator>
          :
          <Login update={this.update.bind(this)} />
        }
      </NavigationContainer>
    );
  }
}
