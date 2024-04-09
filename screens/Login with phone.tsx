import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import MaskGroup from '../assets/MaskGroup.png';
import CountryPicker, { Country } from 'react-native-country-picker-modal'
import { Ionicons } from '@expo/vector-icons';

const LoginPhone: React.FC<any> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCoutryCode] = useState('ID');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const onSelectCountry = (country: Country) => {
    setCoutryCode(country.cca2);
  }
  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmit = () => {
    if (phoneNumber && password) {
      Alert.alert('Logged in Successfully!');
    } else {
      Alert.alert('Failed', 'Please fill in all fields');
    }
  };
  return (
    <View style={styles.Main}>
      <Image style={styles.image} source={MaskGroup} />
      <Text style={styles.glad}>Glad to see you!!</Text>
      <View style={styles.container}>
          <View style={styles.body1}>
        <View style={styles.inputs12}>
          <View style={styles.phoneInputContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFlagButton={false}
              withFilter
              withAlphaFilter
              withCallingCodeButton
              withCallingCode
              onSelect={onSelectCountry}
            />
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              placeholderTextColor= "rgba(45, 45, 45, 0.5)"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
          </View>
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
        </View>
        <Text style={styles.bottomText1}>Forgot password?
          <Text style={styles.lastText1}>   Retrieve</Text>
        </Text>
      <View style={styles.btn}>
        <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      </View>
        <Text style={styles.bottomText}>Don't have an account?
          <Text style={styles.lastText} onPress={() => {navigation.navigate('register')}}> Sign Up</Text>
        </Text>
      </View>
    </View>
  )
}

export default LoginPhone;


const styles = StyleSheet.create({
  body: {
    padding: 0,
    margin: 0,
  },
  body1:{
    height: '18%',
    paddingHorizontal: 30,
  },
  Main: {
    backgroundColor: '#130F26',
    height: '100%',
  },
  image: {
    height: '20%',
    width: '100%',
  },
  glad: {
    fontSize: 30,
    position: 'absolute',
    padding: 70,
    color: '#fff',
  },
  container: {
    height: '100%',
    backgroundColor: '#F4F4FA',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 30,
  },
  inputs12: {
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    padding: 8,
    backgroundColor: '#fff',
  },
  phoneNumberInput: {
    flex: 1,
    height: 40,
    padding: 8,
    fontSize: 16,
  },
  inputs1: {
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
  btn:{
    height: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#130F26',
    padding: 15,
    borderRadius: 20,
    margin: 20,
    marginTop: 300,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  bottomText: {
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgba(45, 45, 45, 0.5)',
  },
  lastText: {
    fontSize: 14,
    color: '#F43939',
  },
  bottomText1: {
    fontWeight: '500',
    textAlign: 'right',
    paddingRight: 10,
    color: 'rgba(45, 45, 45, 0.5)',
    marginBottom: 10,
  },
  lastText1: {
    fontSize: 14,
    color: '#F43939',
  },
});
