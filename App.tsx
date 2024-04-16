import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import  { useEffect, useState } from "react";
import Slider from "./screens/slider";
import Login from "./screens/LoginScreen";
import Phone from "./screens/LoginWithPhone";
import Register from "./screens/Register";
import Home from "./screens/Home";
import OTP from "./screens/OTP";
import Confirm from "./screens/Confirm";
import Request from "./screens/RequestCode";
import Explore from "./screens/EditProfile";
import History from "./screens/History";
import Profile from "./screens/Profile";
import Edit from "./screens/EditProfile";
import Upgrade from "./screens/UpgradePro";
import DetailHistory from "./screens/DetailHistory";
import Notifications from "./screens/Notifications";
import DetailParkingOne from "./screens/ParkingScreenOne";
import Forget from "./screens/ForgetPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React = require("react");


const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=' ' component={Slider}  options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Phone" component={Phone} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}}/>
          <Stack.Screen name="Confirm" component={Confirm} options={{headerShown: false}}/>
          <Stack.Screen name="Explore" component={Explore} options={{headerShown: false}}/>
          <Stack.Screen name="History" component={History} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="Edit" component={Edit} options={{headerShown: false}}/>
          <Stack.Screen name="Upgrade" component={Upgrade} options={{headerShown: false}}/>
          <Stack.Screen name="Request" component={Request} options={{headerShown: false}}/>
          <Stack.Screen name="Forget" component={Forget} options={{headerShown: false}}/>
          <Stack.Screen name="DetailHistory" component={DetailHistory} options={{headerShown: false}}/>
          <Stack.Screen name="Notifications" component={Notifications} options={{headerShown: false}}/>
          <Stack.Screen name="DetailParkingOne" component={DetailParkingOne} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
