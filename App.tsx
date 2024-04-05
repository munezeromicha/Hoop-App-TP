import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginEmail from './screens/Login with email';
import LoginPhone from './screens/Login with phone';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginEmail />
      {/* <LoginPhone /> */}
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
