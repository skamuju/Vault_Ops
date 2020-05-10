import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginForm from "./LoginForm";

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        ></View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/vaultopslogo.png")}
          />
          <Text style={styles.title}>VAULT OPS</Text>
          <Text style={styles.title}>Register</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={this.props.navigation} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1
  },
  logo: {
    width: 70,
    height: 70
  },
  title: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold"
  }
});
