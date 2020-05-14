import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddProductform from "./AddProductform";

export default class AddProduct extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/vaultopslogo.png")}
          />
        </View>
        <View style={styles.wordContainer}>
          <Text style={styles.title}>Add Device</Text>
        </View>
        <View style={styles.formContainer}>
          <AddProductform navigation={this.props.navigation} />
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
    width: 100,
    height: 100
  },
  wordContainer: {
    alignItems: "center",
    flexGrow: 1
  },
  title: {
    color: "black",
    fontSize: 50,
    fontWeight: "900"
  }
});
