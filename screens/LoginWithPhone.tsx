import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react';
import MaskGroup from '../assets/MaskGroup.png';


const LoginPhone = () => {
  return (
    <>
    <View style={styles.Main}>
          <Image style={styles.image} source={MaskGroup}/>
          <Text style={styles.TopText}>Glad to see you!!</Text>
        <View style={styles.container}>
          <View style={styles.inputs}>
          <TextInput
          style={styles.email}
          placeholder="+62"
          placeholderTextColor= ""
          />
          </View>
          <View style={styles.inputs1}>
          <TextInput
          style={styles.email}
          placeholder="Password"
          placeholderTextColor= "rgba(45, 45, 45, 0.5)"
          />
          </View> 
          <View style={styles.bottomText1}>
        <Text style={styles.lastText1}>Forgot password? Retrieve</Text>
      </View>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
          <View style={styles.bottomText}>
        <Text style={styles.lastText}>Don't have an account? Signup</Text>
      </View>
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
  TopText : {
    position: 'absolute',
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    top: 60,
    left: 25,
    // justifyContent: 'center',
    // alignItems: 'center'

  },
  Main:{
    backgroundColor: '#130F26',
  },
  image: {
    height: 200,
    width: 390,
  },
  container:{
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
button: {
    borderWidth: 2,
    backgroundColor: '#130F26',
    padding:20,
    borderRadius: 20,
    margin: 20,
    marginTop: 200,
    textAlign: 'center',
},
buttonText: {
  color: '#052E54',
  textAlign: 'center',
  fontSize: 20,
},
bottomText:{
  flex: 5,
  paddingLeft: 100,
  paddingTop: 10,
},
lastText: {
  fontSize: 14,
  color: '#2D2D2D',
},
bottomText1:{
  flex: 5,
  paddingLeft: 180,
  paddingTop: 10,
},
lastText1: {
  fontSize: 14,
  color: '#2D2D2D',
},
})