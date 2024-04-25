import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { Client, Account, ID } from "react-native-appwrite/src";
import ToastManager, { Toast } from 'toastify-react-native';
import { StackNavigationProp } from '@react-navigation/stack';

let client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('662658e8596ec1427342')

let account = new Account(client);
type LoginScreenProps = {
  navigation: StackNavigationProp<any, 'LoginScreen'>
}
const LoginEmail: React.FC<LoginScreenProps> = ({navigation}) => {

  const showToasts = () => {
    Toast.success('Logged In')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmit= async() => {
    if ( email  && password) {
        await account.createEmailSession(email, password);
        setLoggedInUser(await account.get());

        showToasts();


      setTimeout(() => {
        navigation.navigate("Home");
      }, 3000);
      
    } else {
      Alert.alert('Failed', 'Please fill in all fields');
    }
  };
  return (
    <>
    <View style={styles.Main}>
    <ToastManager />
          <Image style={styles.image} source={require('../assets/MaskGroup.png')}/>
        <Text style={styles.glad}>Glad to see you!!</Text>
        <View style={styles.container}>
          <View style={styles.body1}>
          <View style={styles.inputs}>
          <TextInput
          style={styles.email}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          placeholderTextColor= "rgba(45, 45, 45, 0.5)"
          />
        </View>
        <View style={styles.inputs}>
        <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.email1}
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              value={password}
              onChangeText={handlePasswordChange}
            />
            <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
              <Ionicons name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'} size={24} color="gray" />
            </TouchableWithoutFeedback>
          </View>
        </View>

      <View>
      <Text style={styles.bottomText1}>Forgot password?
        <Text style={styles.lastText1} onPress={() => {navigation.navigate('Forget')}}> Retrieve</Text>
      </Text>
      </View>

      </View>


      <View style={styles.btn}>
          <TouchableOpacity
           style={styles.button}
           onPress={handleSubmit}
          ><Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      </View>
          <Text style={styles.bottomText}>Don't have an account?
        <Text style={styles.lastText} onPress={() => {navigation.navigate('Register')}}> Sign Up</Text>
      </Text>
       </View> 
    </View>
    </>
  )
}

export default LoginEmail;

const styles = StyleSheet.create({
  body: {
    padding: 0,
    margin: 0,
  },
  Main:{
    backgroundColor: '#130F26',
    height: '100%',
    gap: 30
  },
  body1:{
    height: '18%',
    paddingHorizontal: 30,
  },
  image: {
    height: '20%',
    width: '100%',
  },
  glad:{
    fontSize: 30,
    position: 'absolute',
    padding: 70,
    color: '#fff',
  },
  container: {
    backgroundColor: '#F4F4FA',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop:30,
    height: '100%',
  },
  inputs: {
   backgroundColor: '#fff',
   margin: 0,
   marginTop: 10,
   marginBottom: 10,
   padding: 8,
   borderRadius: 10,
   paddingHorizontal: 10,
},
email1: {
  flex: 1,
  height: 40,
  paddingLeft: 10,
  fontSize: 16,
  borderColor: '#ccc',
  borderRadius: 5,
},
passwordInputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: 6,
  borderColor: '#ccc',
  borderRadius: 5,
},
inputs1: {
 backgroundColor: '#fff',
 margin: 30,
 marginTop: 30,
 padding: 8,
 borderRadius: 10,
 paddingHorizontal: 10,
 
},
email: {
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
},
btn:{
  height: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingHorizontal: 30,
},
button: {
    backgroundColor: '#130F26',
    padding: 20,
    borderRadius: 20,
    margin: 20,
    textAlign: 'center',
},
buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
},
bottomText:{
  flex: 5,
  fontWeight: '500',
  textAlign: 'center',
  color: 'rgba(45, 45, 45, 0.5)',
},
lastText: {
  fontSize: 14,
  color: '#F43939',
},
bottomText1:{
  textAlign: 'right',
  fontWeight: '500',
  marginRight: '2%',
  color: 'rgba(45, 45, 45, 0.5)',
  marginTop: 10
},
lastText1: {
  fontSize: 14,
  color: '#F43939',
},
})