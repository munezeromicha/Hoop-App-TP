import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert, Pressable, Button } from 'react-native'
import back from '../assets/Group4.png';
import Location from '../assets/Rectangle104.png';
import { MaterialIcons } from '@expo/vector-icons';


const Payment: React.FC<any> = ({ navigation }) => {
    const [distance, setDistance] = useState<number | null>(null);


    return (
        <>
            <View style={styles.Main}>
                <View style={styles.back}>
                    <Pressable onPress={() => { navigation.navigate('phone') }}>
                        <Image source={back} />
                    </Pressable>
                    <Text style={styles.detail}>Book Details</Text>
                </View>
                <View style={styles.mainCont}>
                    <Image source={Location} />
                    <View>
                        <Text style={styles.mall}>Graha Mall</Text>
                        <Text style={styles.street}>123 Dhaka Street</Text>
                    </View>
                    <View style={styles.boxes}>
                        <View style={styles.boxOne}>
                            <MaterialIcons name="location-on" size={14} color='rgba(244, 57, 57, 1)' />
                            <Text style={styles.head}>A-6</Text>
                        </View>
                        <View style={styles.boxOne}>
                            <MaterialIcons name="access-time" size={14} color='rgba(244, 57, 57, 1)' />
                            <Text style={styles.head}>4 hours</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.include}>
                    <Text style={styles.input}>Input voucher code</Text>
                    <Text style={styles.use}>Use</Text>
                </View>
                <View style={styles.include1}>
                    <View style={styles.sub}>
                        <Text style={styles.boxTwo}>Sub total</Text>
                        <Text style={styles.money}>$30,00</Text>
                    </View>
                    <View style={styles.sub}>
                        <Text style={styles.boxTwo}>Insurance</Text>
                        <Text>$5,00</Text>
                    </View>
                    <View style={styles.sub1}>
                        <Text style={styles.boxThree}>Total</Text>
                        <Text style={styles.dollar}>$35,00</Text>
                    </View>
                </View>
                <Pressable style={styles.pay}>
                    <Text style={styles.pay1}>Pay now</Text>
                </Pressable>
            </View>
        </>
    )
};

export default Payment;


const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
    },
    Main: {
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
    mainCont: {
        width: '80%',
        alignSelf: 'center',
        padding: 10,
        height: '30%',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    mall: {
        color: 'rgba(45, 45, 45, 1)',
        fontSize: 24,
        marginTop: 10,
    },
    street: {
        color: 'rgba(45, 45, 45, 0.4)',
        fontSize: 14,
    },
    boxes: {
        flexDirection: 'row',
        width: '60%',
        height: '20%',
        marginTop: 10,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    boxOne: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 243, 243, 1)',
        width: '45%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    head: {
        color: 'rgba(244, 57, 57, 1)',
        marginLeft: 5,
    },
    place: {
        color: 'rgba(45, 45, 45, 0.4)',
        fontSize: 14
    },
    include: {
        backgroundColor: '#fff',
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '6%',
        padding: 10,
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
    },
    input: {
        color: 'rgba(45, 45, 45, 0.2)',
        marginLeft: 10,
        fontSize: 16
    },
    use: {
        color: 'rgba(244, 57, 57, 1)',
        fontSize: 16,
        fontWeight: '300'
    },
    include1: {
        width: '80%',
        padding: 10,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: '20%',
    },
    sub: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    sub1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    dollar: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    pay: {
        backgroundColor: '#130F26',
        width: '80%',
        height: '8%',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center'
    },
    pay1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '300'
    },
    boxTwo: {
        fontSize: 16,
        color: 'rgba(45, 45, 45, 0.6)'
    },
    money: {
        fontSize: 16,
        color: 'rgba(45, 45, 45, 1)'
    },
    boxThree: {
        fontSize: 16,
        color: 'rgba(45, 45, 45, 1)'
    }
});