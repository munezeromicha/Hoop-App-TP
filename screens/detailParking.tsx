import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert, Pressable } from 'react-native'
import back from '../assets/Group4.png';
import Location from '../assets/Location.png';
import { MaterialIcons } from '@expo/vector-icons';
import GradientText from '../componets/gradientText';



const DetailsParking: React.FC<any> = ({ navigation }) => {
    const [distance, setDistance] = useState<number | null>(null);


    return (
        <>
            <View style={styles.Main}>
                <View style={styles.back}>
                    <Pressable onPress={() => { navigation.navigate('phone') }}>
                        <Image source={back} />
                    </Pressable>
                    <Text style={styles.detail}>Details</Text>
                </View>
                <View style={styles.img1}>
                    <Image source={Location} />
                    <Text style={styles.mall}>Graha Mall</Text>
                    <Text style={styles.street}>123 Dhaka Street</Text>
                </View>
                <View style={styles.mainCont}>
                    <View style={styles.container}>
                        <MaterialIcons name="location-on" size={14} color='rgba(244, 57, 57, 0.7)' style={styles.icon} />
                        {/* <Text style={styles.distanceText}>{distance !== null ? `${distance}m` : 'Loading...'}</Text> */}
                        <Text style={styles.distanceText}>500 m away</Text>
                    </View>
                    <View style={styles.container1}>
                        <MaterialIcons name="access-time" size={14} color='rgba(244, 57, 57, 0.7)' style={styles.icon} />
                        {/* <Text style={styles.distanceText}>{distance !== null ? `${distance}m` : 'Loading...'}</Text> */}
                        <Text style={styles.distanceText}>7 mins</Text>
                    </View>
                </View>
                <View >
                    <Text>Information</Text>
                    <GradientText colors={['#FF5733', '#FFC300']} />
                </View>
            </View>
        </>
    )
};

export default DetailsParking;


const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
    },
    Main: {
        backgroundColor: '#F4F4FA',
        height: '100%',
        padding: 30,
    },
    back: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '21%',
        alignItems: 'center',
    },
    detail: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 60,
        color: '#2D2D2D',
    },
    img1: {
        alignItems: 'center',
    },
    mall: {
        padding: 10,
        fontSize: 24,
        color: 'rgba(45, 45, 45, 1)',
    },
    street: {
        fontSize: 14,
        color: 'rgba(45, 45, 45, 0.6)',
    },
    mainCont: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 17,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 243, 243, 1)'
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 17,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 243, 243, 1)'
    },
    icon: {
        marginRight: 5,
        alignSelf: 'center'
    },
    distanceText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'rgba(244, 57, 57, 0.7)',
        alignSelf: 'center'
    },
});