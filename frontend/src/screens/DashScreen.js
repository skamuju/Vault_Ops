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
export default class DashScreen extends Component {
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
      </View>
    );
  }
}
