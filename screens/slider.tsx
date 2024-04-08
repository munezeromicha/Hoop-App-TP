import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Asset1 from '../assets/Asset1.png';
import Asset2 from '../assets/Asset2.png';
import Asset3 from '../assets/Asset3.png';
import Message from '../assets/Message.png';
import Call from '../assets/Call.png';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import LoginEmail from './LoginScreen';

type SliderScreenProps = {
  navigation: StackNavigationProp<any, 'SliderScreen'>;
};

const slides = [
  {
    id: 1,
    title: "Welcome",
    description: "Find the best possible way to park",
    image: Asset1
  },
  {
    id: 2,
    title: "Hollaaa",
    description: "Find the best possible parking space nearby your desired destination",
    image: Asset2
  },
  {
    id: 3,
    title: "Find Parking",
    description: "Find your perfect parking space wherever and whenever you need",
    image: Asset3
  }
];

const Slider: React.FC<SliderScreenProps> = ({ navigation }) => {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View style={{
        marginTop: -460,
        marginLeft: 325
      }}>
        <Text style={{
          color: '#2D2D2D',
          fontSize: 16,
        }}>
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <View style={styles.container}>
        <AppIntroSlider
          data={slides}
          renderItem={({ item }) => {
            return (
              <View style={styles.swipePart}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode='contain'
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            );
          }}
          activeDotStyle={{
            // marginTop: 10,
            backgroundColor: '#F43939',
          }}
          dotStyle={{
            // marginTop: 10,
            backgroundColor: '#c4c4cb',
          }}
          showSkipButton
          showNextButton={false}
          showDoneButton={false}
          renderSkipButton={() => buttonLabel("Skip") }
          onSkip={() => {
            setShowHomePage(true);
          }}
        />
        <View style={styles.nonSwipingContent}>
          <TouchableOpacity style={styles.buttonOne} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}><Image source={Message} />Login with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTwo} onPress={() => navigation.navigate('Phone')}>
            <Text style={styles.buttonTextTwo}><Image source={Call} />Login with Phone</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.lastText}>Don't have an account? <Text style={styles.signupText} onPress={() => navigation.navigate('Register')}>Signup</Text></Text>
        </View>
      </View>
    );
  }
  return(
    <LoginEmail />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    // alignItems: 'center',
    // justifyContent: 'center',
    // gap: 10,
  },
  swipePart: {
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // marginTop: 30,
    fontSize: 24,
    color: '#2D2D2D',
    textAlign: 'center',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#2D2D2D',
    width: 250,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  image: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
    height: 288,
  },
  nonSwipingContent: {
    alignItems: 'center',
    marginTop: 0,
  },
  buttonOne: {
    width: 311,
    height: 60,
    backgroundColor: '#2D2D2D',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTwo: {
    width: 311,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTextTwo: {
    color: '#2D2D2D',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomText: {
    // justifyContent: 'space-around',
    marginVertical: 10,
    alignItems: 'center',
  },
  lastText: {
    fontSize: 14,
    color: '#2D2D2D',
  },
  signupText :{
    color: '#F43939'
  }
});

export default Slider