import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import OB1Screen from './screens/OB1Screen'

export default function App() {
  return (
    <View style={styles.container}>
      <OB1Screen />
     {/* <SplashScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF3',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
