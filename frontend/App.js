import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import LoginForm from "./src/screens/LoginForm";
import AddProduct from "./src/screens/AddProduct";
import AddProductform from "./src/screens/AddProductform";
import DashScreen from "./src/screens/DashScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Add" component={AddProduct} />
        <Stack.Screen name="Dash" component={DashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
