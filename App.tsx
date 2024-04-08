import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack';
import LoginEmail from './screens/Login with email';
import LoginPhone from './screens/Login with phone';
import Register from './screens/Register';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="email" component={LoginEmail} options={{ headerShown: false }} />
        <Stack.Screen name="phone" component={LoginPhone} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
