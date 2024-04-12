import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import ArrowLeft from '../assets/ArrowLeft.png';
import VerRect from '../assets/VerRectangle.png';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

type NotificationProps = {
    navigation: StackNavigationProp<any, 'NotificationScreen'>
}

const Notifications: React.FC<NotificationProps> = ({navigation}) => {
  return (
    <View style={styles.firstBlock}>
        <View style={styles.blockOne}>
            <View style={styles.insideOne}>
            <TouchableOpacity style={styles.returnBtn} onPress={()=>navigation.navigate('Home')}>
                    <Image style={{width: 24, height: 24}} source={ArrowLeft} />
            </TouchableOpacity>
            <Text style={styles.title}>Notification</Text>
            </View>
            
            <View style={{gap: 20}}>
            <View style={styles.insideTwo}>
                <View>
                    <Text style={{fontSize:20}}>Today</Text>
                </View>
                <View style={{gap: 15}}>
                    <View style={{width: 311, height: 87, backgroundColor:'#FFFFFF', borderRadius: 10,alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={VerRect} />
                            </View>
                            <View style={{gap:5}}>
                                <Text style={{fontSize: 18}}>Order Successful</Text>
                                <Text style={{fontSize: 14, color:'#a4a4a8'}}>Congrats on your reserved parking space...</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: 311, height: 87, backgroundColor:'#FFFFFF', borderRadius: 10,alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={VerRect} />
                            </View>
                            <View style={{gap:5}}>
                                <Text style={{fontSize: 18}}>Order Successful</Text>
                                <Text style={{fontSize: 14, color:'#a4a4a8'}}>Congrats on your reserved parking space...</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{width: 311, height: 87, backgroundColor:'#FFFFFF', borderRadius: 10,alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={VerRect} />
                            </View>
                            <View style={{gap:5}}>
                                <Text style={{fontSize: 18}}>Order Successful</Text>
                                <Text style={{fontSize: 14, color:'#a4a4a8'}}>Congrats on your reserved parking space...</Text>
                            </View>
                        </View>
                    </View>
                </View>
            
            </View>
                <View>
                    <Text style={{fontSize: 20}}>June 12, 2021</Text>
                </View>
                <View>
                <View style={{gap: 20}}>
                    <View style={{width: 311, height: 87, backgroundColor:'#FFFFFF', borderRadius: 10,alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={VerRect} />
                            </View>
                            <View style={{gap:5}}>
                                <Text style={{fontSize: 18}}>Order Successful</Text>
                                <Text style={{fontSize: 14, color:'#a4a4a8'}}>Congrats on your reserved parking space...</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{width: 311, height: 87, backgroundColor:'#FFFFFF', borderRadius: 10,alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View>
                                <Image source={VerRect} />
                            </View>
                            <View style={{gap:5}}>
                                <Text style={{fontSize: 18}}>Order Successful</Text>
                                <Text style={{fontSize: 14, color:'#a4a4a8'}}>Congrats on your reserved parking space...</Text>
                            </View>
                        </View>
                    </View>
                </View>
                </View>
            </View>


        </View>
      
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    insideTwo: {
        gap: 25
    },
    firstBlock:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blockOne: {
        gap: 40
    },
    insideOne: {
        flexDirection: 'row',
        gap: 60
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