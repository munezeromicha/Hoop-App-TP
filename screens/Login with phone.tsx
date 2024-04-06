import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import MaskGroup from '../assets/MaskGroup.png';
import RNPickerSelect from 'react-native-picker-select';


const LoginPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  return (
    <>
      <View style={styles.Main}>
        <Image style={styles.image} source={MaskGroup} />
        <Text style={styles.glad}>Glad to see you!!</Text>
        <View style={styles.container}>
          <View style={styles.inputs12}>
            <View style={styles.phoneInputContainer}>
              <RNPickerSelect
                style={pickerSelectStyles}
                placeholder={{ label: 'Select Country Code', value: '' }}
                onValueChange={handlePhoneNumberChange}
                items={[
                  { label: '+1', value: '+1' },
                  { label: '+44', value: '+44' },
                  // Add more country codes as needed
                ]}
              />
              <TextInput
                style={styles.email1}
                placeholder="Phone Number"
                placeholderTextColor="rgba(45, 45, 45, 0.5)"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
              />
            </View>
          </View>
          <View style={styles.inputs1}>
            <TextInput
              style={styles.email}
              placeholder="Password"
              placeholderTextColor="rgba(45, 45, 45, 0.5)"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
          </View>
          <Text style={styles.bottomText1}>Forgot password?
            <Text style={styles.lastText1}> Retrieve</Text>
          </Text>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
          <Text style={styles.bottomText}>Don't have an account?
            <Text style={styles.lastText}> Signup</Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default LoginPhone;

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
  glad: {
    fontSize: 30,
    position: 'absolute',
    padding: 70,
    color: '#fff',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  inputs12: {
    backgroundColor: '#fff',
    margin: 30,
    marginTop: 30,
    justifyContent: 'center',
    marginBottom: 0,
    padding: 0,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  container: {
    height: 650,
    backgroundColor: '#F4F4FA',
    borderTopLeftRadius: 38,
    borderTopEndRadius: 38,
  },
  inputs: {
    backgroundColor: '#fff',
    margin: 30,
    marginTop: 60,
    marginBottom: 0,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
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
  email1: {
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    borderWidth: 2,
    backgroundColor: '#130F26',
    padding: 20,
    borderRadius: 20,
    margin: 20,
    marginTop: 200,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  bottomText: {
    flex: 5,
    textAlign: 'center',
    color: '#2D2D2D',
  },
  lastText: {
    fontSize: 14,
    color: '#F43939',
  },
  bottomText1: {
    flex: 5,
    textAlign: 'right',
    padding: 20,
    color: '#2D2D2D',
  },
  lastText1: {
    fontSize: 14,
    color: '#F43939',
  },
})


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 26,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
  },
});