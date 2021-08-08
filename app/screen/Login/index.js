import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Platform, SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import i18n from "../../locales";
import Orientation from "react-native-orientation-locker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { keyValueActions } from "../../storage/realm/index";

Icon.loadFont().then(() => {
});
const { t } = i18n;

export default class Login extends Component {

  state = {
    login: "",
    password: "",
    showAlert: false,
    passwordClosed: true,
    iconName: "eye-off",
  };


  componentDidMount() {
    Orientation.getAutoRotateState((rotationLock) => this.setState({ rotationLock }));
    Orientation.lockToPortrait();
  }

  onLogin() {
    let { update } = this.props;
    console.log("logins");
    keyValueActions.setValue("loginned", "true").then(() => {
      this.setState({ loginned: true });
      update();
    });
  }


  render() {
    let { username, password, iconName } = this.state;
    return (
      <SafeAreaView style={styles.backgroundImage}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
          style={styles.container}>
          <TextInput
            value={username}
            onChangeText={(login) => this.setState({ login })}
            placeholder={t("username")}
            style={styles.input}
          />
          <View style={styles.inputContainer}>
            <TextInput
              value={password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={t("password")}
              secureTextEntry={this.state.passwordClosed}
              style={{ padding: 5, width: "80%" }}
            />
            <Icon onPress={() => {
              if (this.state.passwordClosed === true) {
                this.setState({
                  passwordClosed: false,
                  iconName: "eye",
                });
              } else {
                this.setState({
                  passwordClosed: true,
                  iconName: "eye-off",
                });
              }
            }} name={iconName} size={28} />
          </View>

          <TouchableOpacity style={styles.buttonContainer} onPress={this.onLogin.bind(this)}>
            <Text style={styles.buttonText}>{t("login")}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "silver",
    marginBottom: 30,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "silver",
    marginBottom: 30,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    width: "90%",
    borderRadius: 14,
    top: Platform.OS === "ios" ? 150 : 250,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  searchSection: {
    backgroundColor: "#fff",
    borderRadius: 50,
    marginLeft: 35,
    width: 340,
    height: 40,
    margin: 25,
  },
});

