import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image
} from "react-native";
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
          <AddProductform />
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
    alignItems: "flex-end",
    flexGrow: 1
  },
  logo: {
    width: 75,
    height: 75
  },
  wordContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1
  },
  title: {
    color: "black",
    fontSize: 50,
    fontWeight: "900"
  }
});
