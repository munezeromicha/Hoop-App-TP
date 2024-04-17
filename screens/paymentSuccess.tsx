import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Button, Touchable, Pressable } from 'react-native';

const PaymentSuccess: React.FC<any> = ({navigation})=> {
    
    return(
        <>
        <View style={styles.Main}>
            <View style={styles.container}>
            <Image source={require('../assets/Group248.png')}/>
            </View>
            <View style={styles.body1}>
                <Text style={styles.check}>Payment Success</Text>
                <Text style={styles.text}>
                    congrats on your reserved parking space
                </Text>
            </View>
            <View style={styles.last}>
              <Text style={styles.receipt}>Receipt</Text>
              <View style={styles.images}>
                <Image source={require('../assets/Group250.png')}/>
                <Image source={require('../assets/Group249.png')}/>
              </View>
            </View>
            <View style={styles.bottom}>
                    <Pressable style={styles.pay} onPress={()=> navigation.navigate('Home')}>
                        <Text style={styles.pay1}>Back to Home</Text>
                    </Pressable>
                    </View>
            </View>
            </>
)};
export default PaymentSuccess;

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
        height: '45%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body1:{
        height: '18%',
    },
    check:{
        fontSize: 24,
        color: 'rgba(45, 45, 45, 1)',
        alignSelf:'center',
        paddingTop: 30,
    },
    text:{
        paddingTop: 15,
        color: 'rgba(45, 45, 45, 0.5)',
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 0.3,
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
      },
      last:{
        alignItems: 'center'
      },
      receipt:{
        fontSize: 16,
        margin: 20,
        fontWeight: '500'
      },
      images:{
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between'
      },
      bottom:{
        height: '18%',
        justifyContent: 'flex-end'
      },
      pay: {
          backgroundColor: '#130F26',
          width: '90%',
          height: '50%',
          alignSelf: 'center',
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 35,
          justifyContent: 'center'
      },
      pay1: {
          color: '#FFFFFF',
          fontSize: 20,
          fontWeight: 'bold'
      },
})