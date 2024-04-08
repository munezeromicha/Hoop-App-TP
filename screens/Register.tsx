import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button, Alert, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import MaskGroup from '../assets/MaskGroup.png';
import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any, 'RegisterScreen'>;
};

const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {
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

  const handleSubmit = () => {
    if (authentication && email && phoneNumber && password) {
      Alert.alert('Account Created Successfully!');
    } else {
      Alert.alert('Failed', 'Please fill in all fields');
    }
  };
  return (
    <>
      <View style={styles.Main}>
        <Image style={styles.image} source={MaskGroup} />
        <Text style={styles.glad}>Let's start!!</Text>
        <View style={styles.container}>
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
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              value={authentication}
              onChangeText={handleAuthenticationChange}
              secureTextEntry
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
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
        <Text style={styles.bottomText}>Have an account
          <Text style={styles.lastText} onPress={() => navigation.navigate('Login')}> Sign In</Text>
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
  Main: {
    backgroundColor: '#130F26',
  },
  image: {
    height: 200,
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
    height: 650,
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
  button: {
    backgroundColor: '#130F26',
    padding: 20,
    borderRadius: 20,
    margin: 20,
    marginTop: 100,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  bottomText: {
    flex: 5,
    alignSelf: 'center',
    paddingTop: 10,
    color: '#rgba(45, 45, 45, 0.5)',
  },
  lastText: {
    fontSize: 14,
    color: '#F43939',
  },
})