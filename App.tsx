import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack';
import Slider from "./screens/onBoarding";
import LoginEmail from './screens/Login with email';
import LoginPhone from './screens/Login with phone';
import Register from './screens/Register';
import Forget from './screens/forgotPassword';
import Confirm from './screens/confirm';
import OTP from './screens/OTP';
import Code from './screens/code'
import Home from './screens/home';
import DetailsParking from './screens/detailParking';
import ParkingDistance from './componets/distance';
import BookDetail from './screens/bookDetail';
import Payment from './screens/payment';
import PaymentDetail from './screens/paymentDetails';
import PaymentSuccess from './screens/paymentSuccess';
import ParkingRoute from './screens/parkingRoute';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto"/>
    {/* <Forget/> */}
    {/* <LoginEmail/> */}
    {/* <LoginPhone/> */}
    {/* <Register/>   */}
    {/* <Confirm/> */}
    {/* <OTP/> */}
    {/* <Code/> */}
    {/* <Home/> */}
    {/* <DetailsParking/> */}
    {/* <ParkingDistance/> */}
    {/* <BookDetail/> */}
    {/* <Payment/> */}
    {/* <PaymentDetail /> */}
    {/* <PaymentSuccess /> */}
    <ParkingRoute />
    {/* <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='slides' component={Slider}  options={{headerShown: false}}/>
        <Stack.Screen name="email" component={LoginEmail} options={{ headerShown: false }} />
        <Stack.Screen name="phone" component={LoginPhone} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="forget" component={Forget} options={{ headerShown: false}} />
        <Stack.Screen name="confirm" component={Confirm} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF3',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
