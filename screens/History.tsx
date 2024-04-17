import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import Search from '../assets/SearchTwo.png';
import Rectangle1 from '../assets/Rectangle59.png';
import Rectangle2 from '../assets/Rectangle60.png';
import Filter from '../assets/Filter.png';
import clockIcon from '../assets/TimeCircle.png';
import locIcon from '../assets/locCompas.png';
import { StackNavigationProp } from '@react-navigation/stack';

type HistoryScreenProps = {
  navigation: StackNavigationProp<any, 'HistoryScreen'>;
};

const History: React.FC<HistoryScreenProps> = ({navigation}) => {
  return (
    <View style={styles.bigBlock}>
      <View>  
        <Text style={styles.title}>History</Text>  
      </View>
       
       <View style={styles.twoComp}>

        <View style={styles.searchContainer}>
         <Image source={Search} style={styles.icon} />
        <TextInput
        placeholder="Search"
        style={styles.holderInput}
        placeholderTextColor="#9e9ea4"
        />
       </View>

       <View style={styles.overFilter}>
            <TouchableOpacity style={styles.btnFilter}><Image source={Filter} /></TouchableOpacity>
       </View>

       </View>


      <View style={styles.blockThree}>  
        <Text style={styles.textBlockThree}>Recently</Text>
      </View>


      <View style={styles.blockFour}>  
       
      <View style={styles.boxTwo}>
                <TouchableOpacity onPress={()=>navigation.navigate('DetailHistory')}>
                    <View style={styles.insideBox} >
                        <Image source={Rectangle1}/>

                        <View style={styles.twoText}>
                            <View>
                            <Text style={styles.Mall}>Graha Mall</Text>
                            <Text style={styles.Street}>123 Dhaka Street</Text>
                            </View>
                        <View>
                            <View style={styles.overBlock}>
                            <View style={styles.smallBlock}>
                                <Text style={styles.sevenMinutes}><Image source={locIcon} />  A-6</Text>
                            </View>
                            <View style={styles.smallBlock}>
                                <Text style={styles.sevenMinutes}><Image source={clockIcon} />  4 hours</Text>
                            </View>
                            </View>

                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.dates}>12 Aug</Text>
                        </View>

                    </View>
                    </TouchableOpacity>


                </View> 

                <View style={styles.boxTwo}>
                <TouchableOpacity >
                    <View style={styles.insideBox} >
                        <Image source={Rectangle1}/>

                        <View style={styles.twoText}>
                            <View>
                            <Text style={styles.Mall}>Graha Mall</Text>
                            <Text style={styles.Street}>123 Dhaka Street</Text>
                            </View>
                        <View>
                            <View style={styles.overBlock}>
                            <View style={styles.smallBlock}>
                                <Text style={styles.sevenMinutes}><Image source={locIcon} />  A-6</Text>
                            </View>
                            <View style={styles.smallBlock}>
                                <Text style={styles.sevenMinutes}><Image source={clockIcon} />  4 hours</Text>
                            </View>
                            </View>

                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.dates}>12 Aug</Text>
                        </View>

                    </View></TouchableOpacity>


                </View> 
      </View>
      <View style={styles.blockFive}>
        <Text style={styles.textFive}>This Week</Text>

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
                            <View style={styles.overBlock}>
                            <View style={styles.smallBlock}>
                                <Text style={styles.sevenMinutes}><Image source={locIcon} />  A-6</Text>
                            </View>
                            <View style={styles.smallBlock}>
                                <Text style={styles.sevenMinutes}><Image source={clockIcon} />  4 hours</Text>
                            </View>
                            </View>

                        </View>
                        </View>

                        <View style={styles.minutes}>
                        <Text style={styles.dates}>12 Aug</Text>
                        </View>

                    </View></TouchableOpacity>


                </View> 
      </View>


    </View>
  )
}

export default History

const styles = StyleSheet.create({
    overBlock:{
        flexDirection: 'row',
        gap: 20
    },
    textFive:{
        fontSize: 20,
        color: '#2D2D2D',
    },
    blockFive: {
        gap: 20
    },
    twoComp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    overFilter:{
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnFilter: {
        width: 54,
        height: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAF3',
        marginRight: '10%'
    },
    blockFour:{
        position: 'relative',
        gap: 20,
    },
    sevenMinutes:{
        color: '#F43939',
        fontSize: 12
    },
    dates:{
        color: '#868a94',
        fontSize: 12
    },
    minutes:{
        width: 59,
        height: 26,
        marginLeft: '-15%'
    },
    smallBlock: {
        width: 71,
        height: 26,
        backgroundColor: '#FFF3F3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
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
        fontSize: 20,
        color: '#2D2D2D',
        marginLeft: '-40%'
        
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
        width: '60%'
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