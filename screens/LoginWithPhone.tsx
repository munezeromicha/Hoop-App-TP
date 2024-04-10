import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import MaskGroup from '../assets/MaskGroup.png';
import CountryPicker, { Country } from 'react-native-country-picker-modal'
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

type PhoneScreenProps = {
  navigation: StackNavigationProp<any, 'PhoneScreen'>;
};

const LoginPhone: React.FC<PhoneScreenProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCoutryCode] = useState<string>('US');
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
              // visible
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
        <Text style={styles.bottomText1}>Forgot password?
          <Text style={styles.lastText1}> Retrieve</Text>
        </Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=> navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        <Text style={styles.bottomText}>Don't have an account?
          <Text style={styles.lastText} onPress={() => navigation.navigate('Register')}> Signup</Text>
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
  container: {
    height: 650,
    backgroundColor: '#F4F4FA',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 30,
    paddingHorizontal: 30,
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
  button: {
    borderWidth: 2,
    backgroundColor: '#130F26',
    padding: 15,
    borderRadius: 20,
    margin: 20,
    marginTop: 250,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  bottomText: {
    textAlign: 'center',
    color: 'rgba(45, 45, 45, 0.5)',
  },
  lastText: {
    fontSize: 14,
    color: '#F43939',
  },
  bottomText1: {
    textAlign: 'right',
    color: 'rgba(45, 45, 45, 0.5)',
    marginBottom: 10,
  },
  lastText1: {
    fontSize: 14,
    color: '#F43939',
  },
});