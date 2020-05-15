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
  state = {
    devices: [
      { name: "airpods", lifespan: "2", price: "300$" },
      { name: "airphone", lifespan: "7", price: "300$" },
      { name: "airmac", lifespan: "5", price: "300$" }
    ]
  };
  addprod = () => {
    this.props.navigation.navigate("Add", {
      update: this.updateprod
    });
  };
  upgradeprod = () => {
    this.props.navigation.navigate("Upgrade");
  };
  updateprod = (name, lifespan, price) => {
    this.setState({
      devices: [...this.state.devices, { name, lifespan, price }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.devices.map(device => (
          <Text style={styles.welcome}>
            {device.name}
            {"\n"}
            {device.lifespan + " years"}
            {"\n"}
            {device.price}
          </Text>
        ))}
        <TouchableOpacity style={styles.buttonContainer} onPress={this.addprod}>
          <Text style={styles.buttonText}>Add a Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.upgradeprod}
        >
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
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center"
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
