import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react';
import MaskGroup from '../assets/MaskGroup.png';
import Search from '../assets/Search.png';
import Notification from '../assets/Notification.png';
import Car from '../assets/image31.png';
import Bike from '../assets/image32.png';
import Bus from '../assets/image33.png';
import Van from '../assets/image34.png';
import Rectangle1 from '../assets/Rectangle59.png';
import Rectangle2 from '../assets/Rectangle62.png';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
  navigation: StackNavigationProp<any, 'HomeScreen'>;
};

const Home: React.FC<HomeScreenProps> = ({navigation}) => {

    
  return (
    <>
    <View style={styles.Main}>
          <Image style={styles.image} source={MaskGroup}/>
          <View style={styles.TextGroup}>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}><Text style={styles.glad}>Hola, Diane👋🏻</Text></TouchableOpacity>
            <Text style={styles.find}>Find an easy parking spot</Text>
            <TouchableOpacity style={styles.NotifyButton} onPress={()=>navigation.navigate('Notifications')}>
            <Text ><Image source={Notification}/></Text>
            </TouchableOpacity>

    <View style={styles.searchContainer}>
      <Image source={Search} style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.holderInput}
        placeholderTextColor="#f4f4fa"
      />
    </View>
          </View>

        <View style={styles.container}>
            <View style={styles.groupOne}>
                <Text style={styles.categories}>Categories</Text>
                <View style={styles.boxes}>
                    <View style={styles.boxOne}><Image source={Car}/><Text>Car</Text></View>
                    <View style={styles.boxOne}><Image source={Bike}/><Text>Bike</Text></View>
                    <View style={styles.boxOne}><Image source={Bus}/><Text>Bus</Text></View>
                    <View style={styles.boxOne}><Image source={Van}/><Text>Van</Text></View>
                </View>
            </View>
            <View>
               <View style={styles.groupTwo}>
                <Text style={styles.textPark}>Nearst Parking Spaces</Text>

                <View style={styles.boxTwo}>
                <TouchableOpacity onPress={()=> navigation.navigate('Explore')}>
                    <View style={styles.insideBox} >
                        <Image source={Rectangle1}/>

                        <View style={styles.twoText}>
                            <View>
                            <Text style={styles.Mall}>Graha Mall</Text>
                            <Text style={styles.Street}>123 Dhaka Street</Text>
                            </View>
                        <View>
                            <Text style={styles.sevenHours}><Text style={styles.insideHours}>$7</Text><Text>/hour</Text></Text>
                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.sevenMinutes}>7 min</Text>
                        </View>

                    </View></TouchableOpacity>

                </View>
                <View style={styles.boxTwo}>

                <View style={styles.insideBox}>
                        <Image source={Rectangle2}/>

                        <View style={styles.twoText}>
                            <View>
                            <Text style={styles.Mall}>Graha Mall</Text>
                            <Text style={styles.Street}>123 Dhaka Street</Text>
                            </View>
                        <View>
                            <Text style={styles.sevenHours}><Text style={styles.insideHours}>$7</Text><Text>/hour</Text></Text>
                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.sevenMinutes}>7 min</Text>
                        </View>
                    </View>
                </View>
               </View>
            </View>
          </View>





    </View>
    </>
  )
}

export default Home;

const styles = StyleSheet.create({
    sevenMinutes:{
        color: '#F43939',
        fontSize: 12
    },
    minutes:{
        width: 59,
        height: 26,
        backgroundColor: '#FFF3F3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    insideHours: {
        color: '#F43939',
        fontSize: 26,
        fontWeight: 'bold'
    },
    sevenHours: {
        color: '#F43939',
    },
    twoText: {
        flexDirection: 'column',
        gap: 30
    },
    Mall:{
        fontSize: 18,
        color: '#2D2D2D'
    },
    Street: {
        fontSize: 14,
        color: '#868a94'

    },
    insideBox : {
        flexDirection: 'row',
        gap: 10,
    },
    textPark: {
        fontSize: 20,
        color: '#0A1124'
    },
    boxTwo: {
        width: 311,
        height: 126,
        backgroundColor:'#FFFFFF',
        borderRadius: 15,
        justifyContent: 'center',
        paddingLeft: '4%'
    },
    groupTwo: {
        gap: 20
    },
    groupOne: {
        gap: 20
    },
    boxes: {
        flexDirection: 'row',
        gap: 10,
    },
    boxOne: {
        backgroundColor: '#FFFFFF',
        height: 67,
        width: 73,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    categories:{
        fontSize: 20,
        color: '#0A1124',
    },
  body: {
    padding: 0,
    margin: 0,
  },
  Main:{
    backgroundColor: '#130F26',
    height: '100%',
  },
  TextGroup : {
    marginTop: '-90%',
    marginLeft: '10%',
    marginBottom: 20,
    gap: 7
  },
  find: {
    fontSize: 16,
    color: '#868a94',
  },
  NotifyButton: {
    width: 50,
    height: 50,
    backgroundColor: '#2A344E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    marginLeft: 275,
    marginTop: '-20%',
    paddingBottom: 10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A344E',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 30,
    padding: 7,
    marginLeft: '-1%'
  },
  icon: {
    marginLeft: 10,
  },
  holderInput: {
    flex: 1,
    height: 40,
    // color: '#333',
    marginLeft: '6%',
    fontSize: 16,
  },
  body1:{
    height: '18%',
    paddingHorizontal: 30,
  },
  image: {
    height: 426.91,
    width: 466.09,
  },
  glad:{
    fontSize: 30,
    color: '#fff',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F4F4FA',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 30,
    height: '100%',
    gap: 50
  },
  inputs: {
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
  borderColor: '#ccc',
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
inputs1: {
 backgroundColor: '#fff',
 margin: 30,
 marginTop: 30,
 padding: 8,
 borderRadius: 10,
 paddingHorizontal: 10,
 
},

btn:{
  height: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingHorizontal: 30,
},
button: {
    backgroundColor: '#130F26',
    padding: 20,
    borderRadius: 20,
    margin: 20,
    textAlign: 'center',
},
buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
},
bottomText:{
  flex: 5,
  fontWeight: '500',
  textAlign: 'center',
  color: 'rgba(45, 45, 45, 0.5)',
},
lastText: {
  fontSize: 14,
  color: '#F43939',
},
bottomText1:{
  textAlign: 'right',
  fontWeight: '500',
  paddingRight: 10,
  color: 'rgba(45, 45, 45, 0.5)',
},
lastText1: {
  fontSize: 14,
  color: '#F43939',
},
})