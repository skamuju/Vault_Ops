import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";

export default class LoginForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  };
  signup = () => {
    this.props.navigation.navigate("Dash");
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.emailInput.focus()}
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          ref={input => (this.emailInput = input)}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          secureTextEntry
          style={styles.input}
          ref={input => (this.passwordInput = input)}
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          onSubmitEditing={() => this.confirmpasswordInput.focus()}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={input => (this.confirmpasswordInput = input)}
          value={this.state.confirmpassword}
          onChangeText={text => this.setState({ confirmpassword: text })}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.signup}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
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
