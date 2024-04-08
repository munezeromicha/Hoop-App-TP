import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./LoginScreen";

const Stack = createNativeStackNavigator();

const NavScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Slider" component={Login} options={{ title: 'Login with email' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login with email' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavScreen;
