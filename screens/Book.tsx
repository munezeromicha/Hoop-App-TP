import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

type BookScreenProps = {
    navigation: StackNavigationProp <any, 'BookScreen'>
}


const Book: React.FC<BookScreenProps> = ({navigation}) => {
  return (
    <View style={styles.BookBlock}>
                  <View style={styles.insideOne}>
            <TouchableOpacity style={styles.returnBtn} onPress={()=>navigation.navigate('Track')}>
                    <Image style={{width: 24, height: 24}} source={require('../assets/ArrowLeft.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Booking</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft:'15%'}}>
                <Text style={{fontSize: 32, color: '#2D2D2D', width: 165}}>Add Insurance?</Text>
                <Image  source={require('../assets/HoursCounter.png')} />
            </View>

            

            <View style={{flexDirection: 'row', gap:60,justifyContent: 'center',alignItems: 'center'}}>




                <View>
                <Text style={{fontSize: 24, color:'#2D2D2D',fontWeight: 'bold'}}>$35,00</Text>
                </View>

                <View>
                    <TouchableOpacity style={{backgroundColor: '#130F26', borderRadius: 15,width: 197,height: 54,justifyContent: 'center', alignItems:'center'}} >
                        <Text style={{fontSize: 16,color:'#FFFFFF'}}>Pay</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={{width: 106,height: 325, backgroundColor: '#FFFFFF', borderRadius: 15,justifyContent:'center',alignItems:'center',gap:10, position: 'absolute',left: '10%'}}>
                    <View style={{width:82, height: 82, borderRadius: 15,backgroundColor: '#F4F4FA',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/EssenceStation.png')}/>
                    </View>

                    <View style={{width:82, height: 82, borderRadius: 15,backgroundColor: '#F4F4FA',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/RedCar.png')}/>
                    </View>

                    <View style={{width:82, height: 82, borderRadius: 15,backgroundColor: '#F4F4FA',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/ScrewDriver.png')}/>
                    </View>
                </View>
    </View>
  )
}

export default Book

const styles = StyleSheet.create({
    BookBlock:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    insideOne: {
        flexDirection: 'row',
        gap: 60,
        marginLeft: '-30%'
    },
    title: {
      fontSize: 20,
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