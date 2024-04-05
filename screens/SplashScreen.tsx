import { StyleSheet,View, Text, Image } from 'react-native'
import React from 'react';
import Hoop from '../assets/Hoop.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Hoop} />
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAEAF3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 181,
        height: 87,
    }
  });