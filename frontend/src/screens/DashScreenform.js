import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
export default class DashScreenform extends Component {
  addprod = () => {
    this.props.navigation.navigate("Add");
  };
  upgradeprod = () => {
    this.props.navigation.navigate("Upgrade");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Product 1{"\n"}
          When device was bought{"\n"}price it was bought for
        </Text>
        <Text style={styles.welcome}>
          Product 2{"\n"}
          When device was bought{"\n"}price it was bought for
        </Text>
        <Text style={styles.welcome}>
          Product 3{"\n"}
          When device was bought{"\n"}price it was bought for
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.addprod}>
          <Text style={styles.buttonText}>Add a Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.upgradeprod}>
          <Text style={styles.buttonText}>Upgrade </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#2c3e50"
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 70
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
