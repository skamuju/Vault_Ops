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
import UpgradeScreenform from "./UpgradeScreenform";
export default class UpgradeScreen extends Component {
  render() {
    return (
      <View
        style={styles.formContainer}
        behavior="padding"
        style={styles.container}
      >
        <Text style={styles.title}>Upgrades</Text>

        <UpgradeScreenform navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  },
  title: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold"
  }
});
