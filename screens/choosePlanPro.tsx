import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Button, Touchable, Pressable } from 'react-native';

const PlanPro: React.FC<any> = ({navigation})=> {
    const [selected, setSelected] = useState<boolean>(false);

    const toggleSelection = () => {
        setSelected(!selected);
    };
    
    return(
        <>
        <View style={styles.Main}>
                <View style={styles.back}>
                    <Pressable onPress={() => { navigation.navigate('phone') }}>
                        <Image source={require('../assets/Group4.png')} />
                    </Pressable>
                    <Text style={styles.detail}>Upgrade</Text>
                </View>
            <View style={styles.container}>
            <Image source={require('../assets/Group50.png')}/>
            </View>
            <View style={styles.body1}>
                <View style={styles.body2}>
                            <TouchableOpacity onPress={toggleSelection}>
                                <MaterialIcons
                                    name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
                                    size={20}
                                    color={selected ? 'red' : 'red'}
                                />
                            </TouchableOpacity>
                            <View style={styles.middle}>
                                <Text style={styles.year}>Yearly</Text>
                                <Text style={styles.pay}>Pay for a full year</Text>
                            </View>
                            </View>
                            <Text style={styles.dollar}>$210/y</Text>
            </View>
            <View style={styles.body11}>
                <View style={styles.body21}>
                            <TouchableOpacity onPress={toggleSelection}>
                                <MaterialIcons
                                    name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
                                    size={20}
                                    color={selected ? 'red' : 'black'}
                                />
                            </TouchableOpacity>
                            <View style={styles.middle1}>
                                <Text style={styles.year1}>Monthly</Text>
                                <Text style={styles.pay1}>Pay monthly, cancel anytime</Text>
                            </View>
                            </View>
                            <Text style={styles.dollar1}>$20/m</Text>
            </View>
                    <Pressable style={styles.pay12}>
                        <Text style={styles.pay11}>Make Payment</Text>
                    </Pressable>
            </View>
            </>
)};
export default PlanPro;

const styles = StyleSheet.create({
    body:{
        padding: 0,
        margin: 0,
    },
    Main:{
        backgroundColor: '#F4F4FA',
        height: '100%',
        padding: 30,
    },
    back: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '18%',
        alignItems: 'center',
        padding: 30,
    },
    detail: {
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 60,
        color: '#2D2D2D',
    },
    container:{
        height: '35%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body1:{
        padding: 15,
        height: '12%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-between',
        margin: 10
    },
    body2:{
        paddingLeft: 15,
        height: '82%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
    },
    middle:{
        paddingLeft: 20,
    },
    year:{
        fontSize: 20,
        color: 'rgba(45, 45, 45, 1)',
    },
    pay:{
        fontSize: 16,
        paddingTop: 8,
        color: 'rgba(45, 45, 45, 0.5)'

    },
    dollar:{
        color: 'rgba(244, 57, 57, 1)',
        fontSize: 18,
        fontWeight: '400'
    },
    body11:{
        padding: 15,
        height: '12%',
        flexDirection: 'row',
        backgroundColor: 'rgba(234, 234, 243, 1)',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-between',
        margin: 10
    },
    body21:{
        paddingLeft: 15,
        height: '82%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
    },
    middle1:{
        paddingLeft: 20,
    },
    year1:{
        fontSize: 20,
        color: 'rgba(45, 45, 45, 1)',
    },
    pay1:{
        fontSize: 16,
        paddingTop: 8,
        color: 'rgba(45, 45, 45, 0.5)'

    },
    dollar1:{
        color: '#000',
        fontSize: 18,
        paddingBottom: 20,
        fontWeight: '400'
    },
    pay12: {
        backgroundColor: '#130F26',
        width: '100%',
        height: '8%',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 25,
        justifyContent: 'center'
    },
    pay11: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '300'
    },
})