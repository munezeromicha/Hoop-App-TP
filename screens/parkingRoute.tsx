import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image,  Touchable, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const ParkingRoute: React.FC<any> = ({navigation})=> {


    return(
        <>
        <ImageBackground source={require('../assets/image18.png')} style={styles.image}>
        <View style={styles.main}>
            <View style={styles.container}>
            <Text style={styles.route}>Route</Text>
            <Text style={styles.turn}>Turn left to parking spot</Text>
            </View>
    <View style={styles.container1}>
        <Image source={require('../assets/arrow.png')}/>
        <Text>100 m</Text>
    </View>
            <View>

            </View>
        </View>
        </ImageBackground>
        </>
    )
}

export default ParkingRoute;


const styles = StyleSheet.create({
    body:{
        padding: 0,
        margin: 0,
    },
    main:{
        paddingTop: 50,
        padding: 20,
        height: '15%',
        backgroundColor: '#fff',
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image:{
        flex: 1,
        resizeMode: 'cover',
    },
    container:{
        marginLeft: 10,
        width: '58%',
        height: '80%',
        borderRightWidth: 1,
        borderColor: 'rgba(45, 45, 45, 0.1)'
    },
    container1:{
        width: '20%'
    },
    route:{
        fontSize: 26,
        color: 'rgba(45, 45, 45, 1)'
    },
    turn:{
        fontSize: 16,
        color: 'rgba(45, 45, 45, 0.5)'
    }
})