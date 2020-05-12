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
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.addprod}>
          <Text style={styles.buttonText}>Add a Product</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  }
});
