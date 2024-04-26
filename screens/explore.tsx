import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import Rectangle2 from '../assets/Rectangle60.png';
<<<<<<< Updated upstream
import compas from '../assets/locCompas.png';
=======
import compas from '../assets/location.png';
>>>>>>> Stashed changes
import { StackNavigationProp } from '@react-navigation/stack';

const Explore: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.bigBlock}>
      <View>  
        <Text style={styles.title}>Explore</Text>  
      </View>
       
        <View style={styles.searchContainer}>
         <Image source={require('../assets/SearchTwo.png')} style={styles.icon} />
        <TextInput
        placeholder="Search"
        style={styles.holderInput}
        placeholderTextColor="#9e9ea4"
        />
    </View>

      <View style={styles.blockThree}>  
        <TouchableOpacity style={styles.buttonOneIcon} onPress={()=>navigation.navigate('ShowMap')}>
            <Image source={require('../assets/Group189.png')} />
        </TouchableOpacity>
        <Text style={styles.textBlockThree}>Most Popular Most Wanted</Text>
      </View>


      <View style={styles.blockFour}>  
       
      <View style={styles.boxTwo}>
                <TouchableOpacity >
                    <View style={styles.insideBox} >
                        <Image source={require('../assets/Rectangle1.png')}/>

                        <View style={styles.twoText}>
                            <View>
                            <Text style={styles.Mall}>Graha Mall</Text>
                            <Text style={styles.Street}>123 Dhaka Street</Text>
                            </View>
                        <View>
                            <Text style={styles.sevenHours}><Text style={styles.insideHours}>$7</Text><Text>/hour</Text></Text>
                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.sevenMinutes}>7 min</Text>
                        </View>

                    </View></TouchableOpacity>
                </View> 

                <View style={styles.boxTwo}>
                <TouchableOpacity >
                    <View style={styles.insideBox} >
                        <Image source={require('../assets/Rectangle59.png')}/>

                        <View style={styles.twoText}>
                            <View>
                            <Text style={styles.Mall}>Graha Mall</Text>
                            <Text style={styles.Street}>123 Dhaka Street</Text>
                            </View>
                        <View>
                            <Text style={styles.sevenHours}><Text style={styles.insideHours}>$7</Text><Text>/hour</Text></Text>
                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.sevenMinutes}>7 min</Text>
                        </View>

                    </View></TouchableOpacity>


                </View> 

                <View style={styles.boxTwo}>
                <TouchableOpacity >
                    <View style={styles.insideBox} >
                        <Image source={Rectangle2}/>

                        <View style={styles.twoText}>
                            <View>
                            <Text style={styles.Mall}>Graha Mall</Text>
                            <Text style={styles.Street}>123 Dhaka Street</Text>
                            </View>
                        <View>
                            <Text style={styles.sevenHours}><Text style={styles.insideHours}>$7</Text><Text>/hour</Text></Text>
                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.sevenMinutes}>7 min</Text>
                        </View>

                    </View></TouchableOpacity>


                </View> 
      </View>

      <View >
        <TouchableOpacity style={styles.locate}>
            <Image source={compas} />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    locate:{
        
        width: 52,
        height: 55,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#081024',
        marginTop: '-24%',
        marginLeft: '66%',
    },
    blockFour:{
        position: 'relative',
        gap: 20,
    },
    sevenMinutes:{
        color: '#F43939',
        fontSize: 12
    },
    minutes:{
        width: 59,
        height: 26,
        backgroundColor: '#FFF3F3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    insideHours: {
        color: '#F43939',
        fontSize: 26,
        fontWeight: 'bold'
    },
    sevenHours: {
        color: '#F43939',
    },
    twoText: {
        flexDirection: 'column',
        gap: 30
    },
    Mall:{
        fontSize: 18,
        color: '#2D2D2D'
    },
    Street: {
        fontSize: 14,
        color: '#868a94'

    },
    insideBox : {
        flexDirection: 'row',
        gap: 10,
    },
    textPark: {
        fontSize: 20,
        color: '#0A1124'
    },
    boxTwo: {
        width: 311,
        height: 126,
        backgroundColor:'#FFFFFF',
        borderRadius: 15,
        justifyContent: 'center',
        paddingLeft: '4%'
    },
    buttonOneIcon:{
        width: 73,
        height: 56,
    },
    textBlockThree:{
        fontSize: 16,
        color: '#a4a4a8',
        
    },
    blockThree:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30

    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eaeaf3',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 30,
        padding: 7,
        width: 311
      },
      icon: {
        marginLeft: 10,
      },
      holderInput: {
        flex: 1,
        height: 40,
        // color: '#333',
        marginLeft: '6%',
        fontSize: 16,
      },
    title: {
        fontSize: 20,
        color: '#2D2D2D',
    },
    bigBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    }
})