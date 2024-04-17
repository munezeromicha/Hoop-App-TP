import { StyleSheet, Text, View,Image, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack' 

type ShowMapProps = {
    navigation: StackNavigationProp <any, 'ShowMapScreen'>
}

const ShowMap:React.FC<ShowMapProps> = ({navigation}) => {
  return (
    <View style={styles.bigBlock}>
        <ImageBackground
        source={require('../assets/SpotMaps.png')}
        style={styles.background}
        >

        <View style={{position: 'absolute',flexDirection: 'row', gap: 220, marginTop: '-40%'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Explore')}>
            <View style={{width: 44, height:44, backgroundColor: '#EAEAF3',justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <Image style={{width: 24, height: 24}} source={require('../assets/ArrowLeft.png')} />
            </View>
            </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{width: 44, height:44, backgroundColor: '#EAEAF3',justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                         <Image source={require('../assets/blackCompas.png')} />
                    </View>
                </TouchableOpacity>

        </View>

        <View style={{gap: 20, justifyContent: 'center', alignItems: 'center',width: 311, height: 215, borderRadius: 25,backgroundColor: '#FFFFFF',marginTop: 380}}>
            <View style={{gap: 7}}>
            <View style={{flexDirection: 'row',gap: 70, justifyContent: 'center', alignItems:'center'}}>
                <Text style={{fontSize: 24}}>Parking Spots</Text>

                <View style={{backgroundColor: '#FFF3F3', justifyContent:'center', alignItems: 'center', borderRadius: 24,width: 47,height: 32}}>
                    <Text style={{color: '#F43939', fontSize: 14}}>$6</Text>
                </View>
            </View>

            <View>
                <Text style={{fontSize: 14, color: '#848892'}}>123 Dhaka Street</Text>
            </View>
            </View>

            <View style={{flexDirection: 'row', gap: 10, justifyContent:'center', alignItems: 'center'}}>
                <Image source={ require('../assets/parkImage.png')} />
                <Image source={ require('../assets/parkImage.png')} />

            </View>
        </View>
        </ImageBackground>
        

        
    </View>
  )
}

export default ShowMap

const styles = StyleSheet.create({
bigBlock:{
flex: 1,
},
background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',

}

})