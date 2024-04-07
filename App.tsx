import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import OB1Screen from './screens/OB1Screen'
import OB2Screen from './screens/OB2Screen'
import OB3Screen from './screens/OB3Screen'
import React, { useEffect, useState }from 'react';
import Slider from './screens/slider';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {setShowSplash(false)}, 1000)
  },[]);

  return (
    <View style={styles.container}>
      < Slider />
      {/* {showSplash && <SplashScreen />}
      {!showSplash && < Slider />} */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
