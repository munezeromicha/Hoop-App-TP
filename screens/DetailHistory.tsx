import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeft from '../assets/ArrowLeft.png';
import ParkingOne from '../assets/ParkingOne.png';
import compas from '../assets/locCompas.png';
import locIcon from '../assets/LocationIcon.png';
import clock from '../assets/TimeCircle.png';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearTextGradient from 'react-native-text-gradient';

type DetailHistoryProps = {
    navigation: StackNavigationProp <any, 'DetailHistoryScreen'>
};
const DetailHistory: React.FC <DetailHistoryProps>= ({navigation}) => {
  return (
    <View style={styles.firstBlock}>

        <View style={{gap: 30}}>
        <View style={styles.insideOne}>
            <TouchableOpacity style={styles.returnBtn} onPress={()=>navigation.navigate('History')}>
                    <Image style={{width: 24, height: 24}} source={ArrowLeft} />
            </TouchableOpacity>
            <Text style={styles.title}>Detail History</Text>
        </View>

        <View>
            <Text style={{textAlign: 'center',marginTop: 25,position:'relative',color: '#FFFFFF',zIndex:999,fontSize: 12}}>Aug 12, 2021</Text>
            <Image style={{marginTop:'-12%',zIndex:-1}} source={ParkingOne} />
            <View >
        <TouchableOpacity style={styles.locate}>
            <Image source={compas} />
        </TouchableOpacity>
      </View>

        </View>

        <View style={{alignItems: 'center',gap:10}}>
            <Text style={{fontSize: 24}}>Graha Mall</Text>
            <Text style={{fontSize: 14, color:'#a4a4a8'}}>123 Dhaka Street</Text>
        </View>

        <View style={{ gap: 30, alignItems:'center'}}>

        <View style={{ gap: 20,alignItems:'center',flexDirection:'row',}}>
        <View style={{alignItems: 'center', justifyContent: 'center',width:109,height: 32,borderRadius: 5,backgroundColor:'#FFF3F3'}}>
            <Text style={{color:'#F43939',fontSize: 14}}><Image source={locIcon}/> A-6</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center',width:109,height: 32,borderRadius: 5,backgroundColor:'#FFF3F3'}}>
            <Text style={{color:'#F43939',fontSize: 14}}><Image source={clock}/>  4 hours</Text>
        </View>
        </View>

        <View style={{ gap: 15}}>
            <Text style={{fontSize: 20}}>Information</Text>

            <Text style={styles.paragraph}>24/7 parking facility with cctv camera, professional security guard, chair disble, floor parking list facilities. You will get hassle parking facilities with 35% discount on first parking...</Text>



        </View>
        <TouchableOpacity style={{backgroundColor: '#130F26', width: 197, height: 54, alignItems: 'center', justifyContent:'center', borderRadius: 15, marginTop: '-5%'}}>
                <Text style={{fontSize: 16,color:'#FFFFFF'}}>Repeat Booking</Text>
            </TouchableOpacity>
        </View>

        </View>

    </View>
  )
}

export default DetailHistory

const styles = StyleSheet.create({
    paragraph:{
        fontSize: 18,
        color: 'rgba(45,45,45,1)',
        width: 311
    },
    locate:{
        width: 52,
        height: 55,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F43939',
        marginTop: '-9%',
        marginLeft: '40%',
    },
firstBlock:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontSize: 20,
},
insideOne: {
    flexDirection: 'row',
    gap: 50
},
returnBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    backgroundColor: '#EAEAF3',
    borderRadius: 10
},
})