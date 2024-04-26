import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button, Alert, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Client, Account, ID } from 'appwrite';
import Toast from 'react-native-toast-message';

const client = new Client(); 

client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('6626bd912e893160ae48')

const account = new Account(client);
interface User{}

type RegisterScreenProps = {
  navigation: StackNavigationProp<any, 'RegisterScreen'>;
};

const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {
  
  const showToasts = () => {
    Toast.show({
    type:'success',
    text1:'Logged In'
  })
  }

  const [loggedInUser, setLoggedInUser] = useState<User | null>(null)
  const [authentication, setAuthentication] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleAuthenticationChange = (text: string) => {
    setAuthentication(text);
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmit = async() =>{
    if( email && password && phoneNumber && authentication){
      try{
      await account.create(ID.unique(), email, password, phoneNumber);
      await Login(email, password);
      setLoggedInUser(await account.get());
      showToasts();
      navigation.navigate('Login');
    }catch(error){
      console.error(error);
      Alert.alert("failed")
    }
    }else{
      Alert.alert('Failed', 'Please fill in all fields')
    }
  };
  return (
    <>
      <View style={styles.Main}>
        <Image style={styles.image} source={require('../assets/MaskGroup.png')} />
        <Text style={styles.glad}>Let's start!!</Text>
        <View style={styles.container}>
          <View style={styles.body1}>
          <View style={styles.inputs1}>
            <TextInput
              style={styles.email}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
        <View style={styles.inputs1}>
        <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.email1}
              placeholder="Password"
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              secureTextEntry={secureTextEntry}
              value={password}
              onChangeText={handlePasswordChange}
            />
            <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
              <Ionicons name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'} size={24} color="gray" />
            </TouchableWithoutFeedback>
          </View>
        </View>
          <View style={styles.inputs1}>
            <TextInput
              style={styles.email}
              placeholder="Password Authentication"
              keyboardType="default"
              secureTextEntry
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              value={authentication}
              onChangeText={handleAuthenticationChange}
            />
          </View>
          <View style={styles.inputs1}>
          <TextInput
          style={styles.email}
          placeholder="Phone number"
          keyboardType="phone-pad"
          placeholderTextColor= "rgba(45, 45, 45, 0.5)"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          />
          </View>
          </View>
          <View style={styles.btn}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {handleSubmit}}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
        <Text style={styles.bottomText}>Have an account
          <Text style={styles.lastText} onPress={() => {navigation.navigate('email')}}> Sign In</Text>
        </Text>
      </View>
        </View>
    </>
  )
}

export default Register;

const styles = StyleSheet.create({
  body: {
    padding: 0,
    margin: 0,
  },
  body1:{
    paddingTop: 20,
    height:'40%',
  },
  Main: {
    backgroundColor: '#130F26',
    height: '100%',
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
    borderRadius: 5,
  },
  container: {
    height: '100%',
    backgroundColor: '#F4F4FA',
    borderTopLeftRadius: 38,
    borderTopEndRadius: 38,
  },
  inputs1: {
    backgroundColor: '#fff',
    margin: 30,
    marginTop: 30,
    marginBottom: 0,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email: {
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  btn: {
    height: "32%",
    display: "flex",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#130F26",
    padding: 20,
    borderRadius: 20,
    marginBottom: '-10%',
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  bottomText: {
    flex: 5,
    alignSelf: 'center',
    paddingTop: 40,
    color: '#rgba(45, 45, 45, 0.5)',
  },
  lastText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#F43939',
  },
})

function Login(email: string, password: string){
  throw new Error("function not implemented")
}