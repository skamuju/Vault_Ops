import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashScreenform from "./DashScreenform";
export default class DashScreen extends Component {
  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>

        <DashScreenform navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    padding: 10
  },
  title: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold"
  }
});
