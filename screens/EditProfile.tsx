import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native'
import ArrowLeft from '../assets/ArrowLeft.png';
import profilePic from '../assets/Group19.png';
import React, {useState} from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
type editScreenProps = {
    navigation: StackNavigationProp<any, 'EditScreen'>
}
const EditProfile: React.FC <editScreenProps> = ({navigation}) => {
    const [text, setText] = useState("");
  return (
    <View style={styles.bigBlock}>
            <View style={styles.insideOne}>
            <TouchableOpacity style={styles.returnBtn} onPress={()=>navigation.navigate('Home')}>
                    <Image style={{width: 24, height: 24}} source={ArrowLeft} />
            </TouchableOpacity>
            <Text style={styles.title}>Notification</Text>
            </View>
            <View>
                <Image source={profilePic} />
            </View>
            <View style={{}}>
                <Text style={{marginLeft: 85,fontSize:16,color: '#9e9ea4'}}>Name</Text>
                <View style={styles.inputOne}>
            <TextInput
              style={styles.email}
              placeholder="Name"
              value={text}
            //   onChangeText={handleEmailChange}
              placeholderTextColor="rgba(45, 45, 45, 0.5)"
            />
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={{marginLeft: 35,fontSize:16,color: '#9e9ea4'}}>Type</Text>
                <View style={styles.inputTwo}>
            <TextInput
              style={styles.email}
              placeholder="Car Sport"
              value={text}
            //   onChangeText={handleEmailChange}
              placeholderTextColor="rgba(45, 45, 45, 0.5)"
            />
            </View>
            <Text style={{marginLeft: 15,fontSize:16,color: '#9e9ea4'}}>ID</Text>
                <View style={styles.inputTwo}>
            <TextInput
              style={styles.email}
              placeholder="C68721"
              value={text}
            //   onChangeText={handleEmailChange}
              placeholderTextColor="rgba(45, 45, 45, 0.5)"
            />
            </View>
            </View>

            <View>
            <Text style={{marginLeft: 85,fontSize:16,color: '#9e9ea4'}}>Address</Text>
                <View style={styles.inputOne}>
            <TextInput
              style={styles.email}
              placeholder="Address"
              value={text}
            //   onChangeText={handleEmailChange}
              placeholderTextColor="rgba(45, 45, 45, 0.5)"
            />
                </View>
            </View>

            <View style={{flexDirection:'row', gap: 10, marginLeft: '30%', marginTop: '5%'}}>
                <TouchableOpacity style={{width: 146, height: 60, backgroundColor: '#EAEAF3',borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, color: '#2D2D2D'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 146, height: 60, backgroundColor: '#130F26',borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, color: '#FFFFFF'}}>Save</Text>
                </TouchableOpacity>
            </View>
            </View>

    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    inputOne: {
        backgroundColor: "#fff",
        margin: 30,
        marginTop: 30,
        padding: 8,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 350,
        marginLeft: 86
      },
      inputTwo:{
        backgroundColor: "#fff",
        margin: 30,
        marginTop: 30,
        padding: 8,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: 150,
        flexDirection:'row', 
        gap:10,
      },
    email: {
        height: 40,
        paddingLeft: 10,
        fontSize: 18,
      },
bigBlock:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
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