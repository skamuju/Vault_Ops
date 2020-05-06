import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import LoginScreen from "./src/screens/LoginScreen";
//import LoginForm from "./src/screens/LoginForm";
import AddProduct from "./src/screens/AddProduct";
import AddProductform from "./src/screens/AddProductform";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Add" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
