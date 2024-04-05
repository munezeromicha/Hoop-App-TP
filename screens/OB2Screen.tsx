import { StyleSheet,View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon2 from '../assets/Asset2.png';
import Message from '../assets/Message.png';
import Call from '../assets/Call.png';
import DotsTwo from '../assets/dotsTwo.png';

const OB2Screen = () => {
  return (
    <View style={styles.containerOne}>

      <Text style={styles.SkipText}>Skip</Text>

<View style={styles.underContainer}>
      <View style={styles.iconTwo}>
        <Image source={Icon2} />
      </View>

      <View style={styles.Welcome}>
        <Text style={styles.WelcomeText}>Hollaaa</Text>
        <Text style={styles.SmallText}>Find the best possible parking space nearby your desired destination</Text>
      </View>

      <View style={styles.dotsOne}>
        <Image source={DotsTwo} />
      </View>

      <View style={styles.buttons}>
      <TouchableOpacity style={styles.buttonOne}>
        <Text style={styles.buttonText}><Image source={Message} />Login with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonTwo}>
        <Text style={styles.buttonTextTwo}><Image source={Call} />Login with Phone</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.bottomText}>
      <Text style={styles.lastText}>Don't have an account? <Text style={styles.TextColor}>Signup</Text></Text>
      </View>
      </View>
    </View>
  )
}

export default OB2Screen;

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // gap: 60,
    },
    underContainer: {
        // flex: 1,
        gap: 10,
        alignItems: 'center',
        marginTop: 100,
        
    },
    SkipText : {
        position: 'absolute',
        color: '#2D2D2D',
        top: 50,
        right: 35,
        fontSize: 16,
        // fontFamily: 'Avenir'
    },
    iconTwo :{
    //    flex: 1,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: 311,
        height: 204
    },
    Welcome: {
        flex: 2,
        // gap: 5,
        // justifyContent: 'center',
        // alignContent: 'center',
    },
    dotsOne: {
        flex: 3,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30,
    },
    WelcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D2D2D',
        textAlign: 'center',
    },
    SmallText: {
        fontSize: 16,
        color: '#2D2D2D',
        textAlign: 'center',
        width: 250
    },
    buttons: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    buttonOne: {
        width: 300,
        height: 50,
        backgroundColor: '#2D2D2D',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',

    },
    buttonTwo: {
        width: 300,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextTwo: {
        color: '#2D2D2D',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomText:{
        flex: 5,
        justifyContent: 'space-around',
    },
    lastText: {
        fontSize: 14,
        color: '#2D2D2D',
    },
    TextColor : {
        color: '#F43939'
    }


})

