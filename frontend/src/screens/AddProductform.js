import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";

export default class AppProductform extends Component {
  dashnav = () => {
    this.props.navigation.navigate("Dash");
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="Name of Device"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.navigationInput.focus()}
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="When did you buy this device"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          ref={input => (this.navigationInput = input)}
          onSubmitEditing={() => this.navtwoInput.focus()}
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Price you bought it for"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          ref={input => (this.navtwoInput = input)}
          autoCorrect={false}
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.dashnav}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 70
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 14
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15
  },
  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "800"
  }
});
