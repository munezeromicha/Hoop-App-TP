import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Button, Touchable } from 'react-native';
import Group3 from '../assets/Group3.png'
import { useScrollToTop } from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Code: React.FC<any> = ({navigation})=> {
    const [otp, setOtp] = useState(['','','','']);
    const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleOTPChange = (index: number, value: string) =>{
        const newOTP = [...otp]
        newOTP[index] = value;

        setOtp(newOTP);
    };
    const handleAuthenticate = async () => {
        const supported = await LocalAuthentication.hasHardwareAsync() && await LocalAuthentication.isEnrolledAsync();
        if (supported) {
          try {
            const result = await LocalAuthentication.authenticateAsync();
            if (result.success) {
              Alert.alert('Success', 'Authentication successful!');
            } else {
              Alert.alert('Failure', 'Authentication failed!');
            }
          } catch (error) {
            console.error('Authentication error:', error);
          }
        } 
      };
    
    return(
        <>
        <View style={styles.Main}>
            <View style={styles.container}>
            <Image source={Group3}/>
            </View>
            <View style={styles.body1}>
                <Text style={styles.check}>Enter your Passcode</Text>
                <Text style={styles.text}>
                For the security of your account,{'\n'}
                please enter the security code.
                </Text>
            </View>
        <View style={styles.container1}>
            {otp.map((digit, index) => (
            <TextInput
            key={index}
            ref={otpInputRefs[index]}
            style={styles.input}
            value={digit}
            onChangeText={(value) => handleOTPChange(index, value)}
            keyboardType="numeric"
            maxLength={1}
  
            />
            ))}
        </View>
    <View style={styles.container2}>
      <TouchableOpacity onPress={handleAuthenticate} style={styles.touchable}>
        <MaterialCommunityIcons name="fingerprint" size={50} color="rgba(45, 45, 45, 0.4)"/>
      </TouchableOpacity>
    <Text style={styles.scan}>Scan <Text style={styles.verify}>to verify for easy security</Text></Text>
    </View>
            </View>
            </>
)};
export default Code;

const styles = StyleSheet.create({
    body:{
        padding: 0,
        margin: 0,
    },
    Main:{
        backgroundColor: '#F4F4FA',
        height: '100%',
        padding: 30,
    },
    container:{
        height: '40%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body1:{
        height: '18%',
    },
    check:{
        fontSize: 27,
        color: 'rgba(45, 45, 45, 1)',
        alignSelf:'center',
        paddingTop: 30,
    },
    text:{
        paddingTop: 15,
        textAlign: 'center',
        color: 'rgba(45, 45, 45, 0.5)',
        lineHeight: 26,
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 1,
    },
    container1: {
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: '13%',
        height: '50%',
        borderBottomWidth: 2,
        borderColor: 'rgba(45, 45, 45, 0.1)',
        margin: 5,
        textAlign: 'center',
        fontSize: 40,
      }, 
      container2:{
        flex: 1,
        // backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      touchable:{
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
      },
      scan:{
        paddingTop: 15,
        color: 'red'
      },
      verify:{
        color: 'rgba(45, 45, 45, 0.5)',
      }
})