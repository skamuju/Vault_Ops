import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
export default class UpgradeScreenform extends Component {
  dashnavigate = () => {
    this.props.navigation.navigate("Dash");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Mackbook{"\n"}2014</Text>
        <Text style={styles.welcome}>
          Mackbook air{"\n"}
          2019{"\n"}best price:target 300$
        </Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.dashnavigate}
        >
          <Text style={styles.buttonText}>Next</Text>
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
