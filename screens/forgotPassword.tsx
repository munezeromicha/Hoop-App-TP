import React, {useState} from 'react'
import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert, Pressable } from 'react-native'
import back from '../assets/Group4.png'


const Forget: React.FC<any> = ({navigation})=>{
   const [email, setEmail] = useState('');
    
   const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit= () => {
    if ( email) {
      Alert.alert('logged in Successfully!');
    } else {
      Alert.alert('Failed', 'Please fill in all fields');
    }
  };
    return(
        <>
        <View style={styles.Main}>
        <View style={styles.back}>
          <Pressable onPress={ () =>{navigation.navigate('email')}}>
            <Image source={back}/>
            </Pressable>
            <Text style={styles.forgot}>Forgot Password</Text>
        </View>
        <View style={styles.middle}>
            <Text style={styles.reset}>Reset password</Text>
            <Text style={styles.text}>
            Enter the email associated with your {'\n'}
            account and we’ll send an email with {'\n'}
            instructions to reset your password.
            </Text>
            <Text style={styles.address}>Email address</Text>
          <View style={styles.inputs}>
          <TextInput
          style={styles.email}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          placeholderTextColor= "rgba(45, 45, 45, 0.5)"
          />
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
           style={styles.button}
           onPress={handleSubmit}
          ><Text style={styles.buttonText} onPress={() =>{navigation.navigate('confirm')}}>Send</Text>
          </TouchableOpacity>
          </View>
        </View>
        </>
    )
}

export default Forget;

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
    middle: {
        height: '30%',
    },
    back:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '18%',
        alignItems: 'flex-end',
        paddingBottom: 40,
    },
    forgot:{
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 30,
        paddingBottom: 10,
        color: '#2D2D2D',
    },
    reset:{
        fontSize: 20,
        color: '#2D2D2D',
    },
    text:{
        color: 'rgba(45, 45, 45, 0.7)',
        paddingTop: 5,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 0.5,
    },
    address:{
        fontSize: 18,
        paddingTop: 20,
        color: 'rgba(45, 45, 45, 0.8)',
    },
    inputs: {
     backgroundColor: '#fff',
     margin: 0,
     marginTop: 15,
     marginBottom: 10,
     padding: 8,
     borderRadius: 10,
     paddingHorizontal: 10,
  },
  email: {
      height: 40,
      paddingLeft: 10,
      fontSize: 18,
  },
  btn:{
    height: '52%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
      borderWidth: 2,
      backgroundColor: '#130F26',
      padding: 18,
      borderRadius: 20,
      margin: 20,
      textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
})