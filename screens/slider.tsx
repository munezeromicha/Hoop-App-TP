import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import Asset1 from '../assets/Asset1.png'
import Asset2 from '../assets/Asset2.png'
import Asset3 from '../assets/Asset3.png'
import Message from '../assets/Message.png'
import Call from '../assets/Call.png'
import { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type SliderScreenProps = {
  navigation: StackNavigationProp<any, 'SliderScreen'>;
};
const slides = [
  {
    id: 1,
    title: "Welcome",
    description: "Find a best possible way to park",
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
]

const Slider: React.FC<SliderScreenProps> = ({ navigation }) => {
  const [showHomePage, setShowHomePage] = useState(false)

  const buttonLabel = (label) => {
    return(
      <View style={{
        position: 'absolute',
        top: 40,
        left: 325
      }}>
        <Text style={{
          color: '#2D2D2D',
          fontSize: 16,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage){
    return(
      <AppIntroSlider 
        data={slides}
        renderItem={({item})=>{
          return(
            <View style={styles.container}>
              <Image 
                source={item.image}
                style={styles.image}
                resizeMode='contain' 
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            
          )
        }}
        activeDotStyle={{
          backgroundColor: '#F43939',
        }}
        showSkipButton
        showNextButton={false}
        showDoneButton={false}
        renderSkipButton={()=>buttonLabel("Skip")}
        onSkip={()=>{
          
          setShowHomePage(true);
        }}
      />


    )
  }

}

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  slider: {

zIndex: 9999,
  },
  title:{
    fontSize: 24,
    color: '#2D2D2D'
  },
  description : {
    
    fontSize: 16,
    color: '#2D2D2D',
    width: 250,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
  textStyle: {
    color: 'white',
  },
  image: {
    marginTop: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 450,
    // borderWidth: 1,
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
});