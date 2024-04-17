import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

type SpaceScreenProps = {
    navigation: StackNavigationProp<any, 'SpaceScreen'>
}

const ChooseSpace: React.FC<SpaceScreenProps> = ({navigation}) => {
  return (
    <View style={styles.SpaceBlock}>
            <View style={styles.insideOne}>
            <TouchableOpacity style={styles.returnBtn} onPress={()=>navigation.navigate('Track')}>
                    <Image style={{width: 24, height: 24}} source={require('../assets/ArrowLeft.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Choose Space</Text>
            </View>

            <View>
                <Text>Scroll</Text>
            </View>

            <View>
                <Image source={require('../assets/CarSpace.png')} />
            </View>
            
            <TouchableOpacity style={{width: 311, height: 60, backgroundColor: '#130F26',borderRadius: 15,justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>Book Space</Text>
            </TouchableOpacity>
    </View>
  )
}

export default ChooseSpace

const styles = StyleSheet.create({
SpaceBlock:{
flex: 1,
gap: 30,
justifyContent: 'center',
alignItems: 'center',
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