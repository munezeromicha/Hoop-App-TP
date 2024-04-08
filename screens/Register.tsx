import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react';
import MaskGroup from '../assets/MaskGroup.png';



const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (text: string) => {
    setFullName(text);
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

  const handleSubmit = () => {
    if (fullName && email && phoneNumber && password) {
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
              placeholder="Full Name"
              keyboardType="default"
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              value={fullName}
              onChangeText={handleFullNameChange}
            />
          </View>
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
          <TextInput
          style={styles.email1}
          placeholder="+62"
          keyboardType="phone-pad"
          placeholderTextColor= "rgba(45, 45, 45, 0.5)"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          />
          </View>
          <View style={styles.inputs1}>
            <TextInput
              style={styles.email}
              placeholder="Password"
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
          </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
        <Text style={styles.bottomText}>Don't have an account?
          <Text style={styles.lastText}> Signup</Text>
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
    paddingLeft: 10,
    fontSize: 16,
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
    marginTop: 130,
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
    color: '#2D2D2D',
  },
  lastText: {
    fontSize: 14,
    color: '#F43939',
  },
  bottomText1: {
    flex: 5,
    paddingLeft: 180,
    paddingTop: 10,
    color: '#2D2D2D',
  },
  lastText1: {
    fontSize: 14,
    color: '#F43939',
  },
})