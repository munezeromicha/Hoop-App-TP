import React, {useEffect, useRef, useState} from 'react'
import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert, Pressable } from 'react-native'
import back from '../assets/Group4.png';
import { MaterialIcons } from '@expo/vector-icons';


const OTP: React.FC<any> = ({navigation})=>{
    const [otp, setOtp] = useState(['','','','',]);
    const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [expiryTime, setExpiryTime] = useState(300);
    const [countDown, setCountDown] = useState(expiryTime);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setCountDown((prevCountDown) =>{
                if (prevCountDown === 0){
                    return 0;
                }else{
                    return prevCountDown - 1;
                }
            })
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() =>{
        if(countDown === 0){
            setExpiryTime
        }
    }, [countDown]);

    const handleOTPChange = (index: number, value: string) =>{
        const newOTP = [...otp]
        newOTP[index] = value;

        setOtp(newOTP);
    };

    const formatTime = (time: number) =>{
        const minutes = Math.floor(time / 60)
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return(
        <>
        <View style={styles.Main}>
        <View style={styles.back}>
          <Pressable onPress={ () =>{navigation.navigate('phone')}}>
            <Image source={back}/>
            </Pressable>
            <Text style={styles.verify}>OTP Verification</Text>
        </View>
        <View style={styles.middle}>
            <Text style={styles.text}>
            We have send an OTP on {'\n'}
            given number +62 {'\n'}
            8123456789
            </Text>
        </View>
        <View style={styles.container}>
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
        <View style={styles.time}>
            <MaterialIcons name="access-time" size={20} color="#F43939"/>
            <Text style={styles.timer}>{formatTime(countDown)}</Text>
        </View>
        </View>
        </>
    )
}

export default OTP;

const styles = StyleSheet.create({
    body:{
        margin:0,
        padding: 0,
    },
    Main: {
        backgroundColor: '#F4F4FA',
        height: '100%',
        padding: 30,
    },
    back:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '21%',
        alignItems: 'center',
    },
    verify:{
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 30,
        paddingBottom: 10,
        color: '#2D2D2D',
    },
    middle: {
        height: '20%',
        textAlign: 'center',
    },
    text:{
        paddingTop: 15,
        textAlign: 'center',
        color: 'rgba(45, 45, 45, 1)',
        lineHeight: 26,
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
    },
    container: {
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: '13%',
        height: '20%',
        borderBottomWidth: 2,
        borderColor: 'rgba(45, 45, 45, 0.1)',
        margin: 5,
        textAlign: 'center',
        fontSize: 20,
      },
      time:{
        alignSelf: 'center',
        flexDirection: 'row',
      },
      timer: {
        marginLeft: 10,
        fontSize: 16,
        color: '#F43939',
      },
})