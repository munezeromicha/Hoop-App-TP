import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

type TrackingScreenProps = {
    navigation: StackNavigationProp <any, 'TrackScreen'>
}

const TrackingPark: React.FC<TrackingScreenProps> = ({navigation}) => {
  return (
    <View style={styles.trackBlock}>
      <ImageBackground
      source={require('../assets/BackMap.png')}
      style={styles.trackBack}
      >
        <View style={styles.whiteBox}>

        <View style={{marginTop: 40}}>

            <View style={{flexDirection:'row',gap:50}}>
                <Text style={{color: '#848892',fontSize: 12}}>Your Destination Address</Text>
                <View style={{width: 86,height: 32,backgroundColor: '#FFF3F3', borderRadius: 5,justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: '#F43939', fontSize: 12}}><Image source={require('../assets/TimeCircle.png')} /> 7 minutes</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',gap: 10}}>
            <Image source={require('../assets/RedLineLoc.png')} />
            <Text style={{fontSize: 14}}>123 Dhaka Street</Text>
            </View>

            <View style={{gap: 10}}>

            <View>
                <Text style={{fontSize: 12, color: '#848892'}}>Your Address</Text>
            </View>

            

            </View>

            <View style={{ flexDirection: 'row', gap: 10}}>
                <Image source={require('../assets/RedLoc.png')} />
                <Text>123 Dhaka Street</Text>
            </View>

            </View>

            <View>
                <TouchableOpacity style={styles.startBtn} onPress={()=> navigation.navigate('ChooseSpace')}>
                    <Image style={{marginLeft: 20}} source={require('../assets/whiteEx.png')} />
                    <Text style={{fontSize: 16,color: '#FFFFFF',textAlign: 'center'}}> Start Now</Text>
                </TouchableOpacity>
            </View>



        </View>
      </ImageBackground>
    </View>
  )
}

export default TrackingPark

const styles = StyleSheet.create({
    startBtn:{
        flexDirection: 'row',
        gap: 100,
        borderRadius: 30,
        width: 311,
        height: 94,
        backgroundColor: '#130F26',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    whiteBox:{
        marginTop: 370,
        backgroundColor: '#FFFFFF',
        width: 311,
        height: 294,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trackBlock:{
        flex: 1,
    },
    trackBack:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    }
})