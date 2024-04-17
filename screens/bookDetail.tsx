import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert, Pressable, Button } from 'react-native'
import back from '../assets/Group4.png';
import Location from '../assets/Rectangle64.png';
import insurance from '../assets/Group247.png'
import { Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import GradientText from '../componets/gradientText';



const BookDetail: React.FC<any> = ({ navigation }) => {
    const [distance, setDistance] = useState<number | null>(null);


    return (
        <>
            <View style={styles.Main}>
                <View style={styles.back}>
                    <Pressable onPress={() => { navigation.navigate('Book') }}>
                        <Image source={back} />
                    </Pressable>
                    <Text style={styles.detail}>Book Details</Text>
                </View>
                <View style={styles.image}>
                <Image source={Location}/>
                </View>
                <View style={styles.group}>
                <View>
                    <Text style={styles.mall}>Graha Mall</Text>
                    <Text style={styles.street}>123 Dhaka Street</Text>
                </View>
                <View style={styles.hour}>
                <Text style={styles.hour1}>$10/h</Text>
                </View>
                </View>
                <View style={styles.boxes}>
                    <View style={styles.boxOne}>
                    <MaterialIcons name="location-on" size={14} color='rgba(244, 57, 57, 1)' style={styles.icon} />
                    <Text style={styles.head}>A-6</Text>
                    <Text style={styles.place}>Parking Place</Text>
                    </View>
                    <View style={styles.boxOne}>
                    <MaterialIcons name="access-time" size={14} color='rgba(244, 57, 57, 1)' style={styles.icon} />
                    <Text style={styles.head}>4 h</Text>
                    <Text style={styles.place}>Time</Text>
                    </View>
                </View>
                <View style={styles.include}>
                    <Image source={insurance}/>
                    <Text style={styles.insurance}>Include Insurance</Text>
                    <Text style={styles.five}>$5/h</Text>
                </View>
                <View style={styles.include1}>
                    <Text style={styles.dollar}>$35,00</Text>
                    <Pressable style={styles.pay} onPress={()=> navigation.navigate('Payment')}>
                        <Text style={styles.pay1}>Pay</Text>
                    </Pressable>
                </View>
                </View>
</>
    )};

    export default BookDetail;


    const styles = StyleSheet.create ({
        body: {
            margin: 0,
            padding: 0,
        },
        Main:{
            height: '100%',
            backgroundColor: 'rgba(244, 244, 250, 1)'
        },
        back: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '20%',
            alignItems: 'center',
            padding: 30,
        },
            detail: {
                fontSize: 20,
                fontWeight: '500',
                paddingLeft: 60,
                color: '#2D2D2D',
            },
        image:{
            alignSelf: 'center',
        },
        group:{
            width: '80%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '10%',
            flexDirection: 'row',
        },
        mall:{
            fontSize: 28,
            color: 'rgba(45, 45, 45, 1)'
        },
        street:{
            fontSize: 14,
            color: 'rgba(45, 45, 45, 0.4)'
        },
        hour:{
            backgroundColor: 'rgba(255, 243, 243, 1)',
            padding: 10,
            borderRadius: 10
        },
        hour1:{
            color: 'rgba(244, 57, 57, 1)',
            fontSize: 16
        },
        icon:{
            backgroundColor: 'rgba(255, 243, 243, 1)',
            padding: 10,
            borderRadius: 5
        },
        boxes:{
            flexDirection: 'row',
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'space-between'
        },
        boxOne:{
            backgroundColor: '#fff',
            width: '45%',
            alignItems: 'center',
            padding: 20,
            borderRadius: 20
        },
        head:{
            color: 'rgba(45, 45, 45, 1)',
            fontSize: 18,
            marginTop: 5,
        },
        place:{
            color: 'rgba(45, 45, 45, 0.4)',
            fontSize: 14
        },
        include:{
            backgroundColor: '#fff',
            width: '80%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '8%',
            padding: 10,
            margin: 20,
            borderRadius: 15,
            flexDirection: 'row',
        },
        insurance:{
            fontSize: 18,
            fontWeight: '300',
            color: 'rgba(45, 45, 45, 1)'
        },
        five:{
            fontSize: 16,
            fontWeight: '300',
            color: 'rgba(45, 45, 45, 1)'
        },
        include1:{
            width: '80%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '8%',
            padding: 10,
            margin: 20,
            flexDirection: 'row',
        },
        dollar:{
            fontSize: 24,
            fontWeight: 'bold'
        },
        pay:{
            backgroundColor: '#130F26',
            width: '50%',
            height: '100%',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center'
        },
        pay1:{
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
        }
    });