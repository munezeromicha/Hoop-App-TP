import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert, Pressable, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const PaymentDetail: React.FC<any> = ({ navigation }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [isOn, setIsOn] = useState<boolean>(false);
    const [selected, setSelected] = useState<boolean>(false);

    const toggleSelection = () => {
        setSelected(!selected);
    };

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    const toggleRotation = () => {
        setRotated(!rotated);
    }


    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleAddItem = () => {
        // Logic to add new item
    };
    return (
        <>
            <View style={styles.Main}>
                <View style={styles.back}>
                    <Pressable onPress={() => { navigation.navigate('Payment') }}>
                        <Image source={require('../assets/Group4.png')} />
                    </Pressable>
                    <Text style={styles.detail}>Payment Details</Text>
                </View>
                <View style={styles.body1}>
                    <View style={styles.container}>
                        <Text style={styles.mobile}>Mobile banking</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="rgba(45, 45, 45, 1)" />
                    </View>
                    <View style={styles.mainCont}>
                        <View style={styles.container1}>
                            <Text style={styles.mobile}>Credit Card</Text>
                            <MaterialIcons name="keyboard-arrow-up" size={20} color="rgba(45, 45, 45, 1)" />
                        </View>
                        <View style={styles.container2}>
                            <View style={styles.text}>
                                <Image
                                    source={require('../assets/symbol.png')}
                                    style={styles.visa}
                                />
                                <Text style={styles.mobile}>ABC Bank ****6189</Text>
                            </View>
                            <TouchableOpacity onPress={toggleSelection}>
                                <MaterialIcons
                                    name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
                                    size={20}
                                    color={selected ? 'red' : 'red'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container3}>
                            <Image
                                source={require('../assets/VisaLogo.png')}
                                style={styles.visa}
                            />
                            <Text style={styles.mobile}>ABC Bank ****6189</Text>
                        </View>
                        <View style={styles.container4}>
                            <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
                                <MaterialIcons name="add" size={16} color="#fff" />
                            </TouchableOpacity>
                            <Text style={styles.card}>Add new card</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.mobile}>Google Play</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="rgba(45, 45, 45, 1)" />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.mobile}>Debit Card</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color="rgba(45, 45, 45, 1)" />
                    </View>
                    <View style={styles.send}>
                        <Text style={styles.send1}>send reciept to your email</Text>
                        <TouchableOpacity onPress={toggleSwitch}>
                            {isOn ? (
                                <MaterialIcons name="toggle-on" size={44} color="rgba(244, 57, 57, 1)" />
                            ) : (
                                <MaterialIcons name="toggle-off" size={44} color="rgba(244, 57, 57, 1)" />
                            )}
                        </TouchableOpacity>
                    </View>
                    <Pressable style={styles.pay} onPress={()=> navigation.navigate('PaymentSuccess')}>
                        <Text style={styles.pay1}>Pay now</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
};

export default PaymentDetail;

const styles = StyleSheet.create({
    body: {
        padding: 0,
        margin: 0,
    },
    body1: {
        width: '100%',
        height: '82%',
    },
    Main: {
        height: '100%',
        backgroundColor: 'rgba(244, 244, 250, 1)'
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
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '80%',
        alignSelf: 'center',
        height: '6%',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    mobile: {
        fontSize: 16,
        color: 'rgba(45, 45, 45, 1)'
    },
    mainCont: {
        height: '30%',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    container1: {
        flexDirection: 'row',
        height: '25%',
        justifyContent: 'space-between',
    },
    container2: {
        backgroundColor: 'rgba(244, 244, 250, 1)',
        flexDirection: 'row',
        height: '25%',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        justifyContent: 'space-between',
    },
    text: {
        flexDirection: 'row'
    },
    container3: {
        backgroundColor: 'rgba(244, 244, 250, 1)',
        flexDirection: 'row',
        height: '25%',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    visa: {
        alignSelf: 'center',
        marginRight: 15,
    },
    icon: {
        alignSelf: 'flex-end'
    },
    container4: {
        flexDirection: 'row',
        marginTop: 5,
    },
    addButton: {
        width: '7%',
        height: '40%',
        borderRadius: 25,
        backgroundColor: 'rgba(244, 57, 57, 1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        marginLeft: 10,
        fontSize: 12,
        color: 'rgba(45, 45, 45, 0.5)'
    },
    send: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '18%',
        alignItems: 'center',
    },
    send1: {
        fontSize: 14,
    },
    pay: {
        backgroundColor: '#130F26',
        width: '80%',
        height: '10%',
        alignSelf: 'center',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 25,
        justifyContent: 'center'
    },
    pay1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
});