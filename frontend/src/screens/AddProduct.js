import React, { Component } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import AddProductform from "./AddProductform";
export default class AddProduct extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
  wordContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold"
  }
});
