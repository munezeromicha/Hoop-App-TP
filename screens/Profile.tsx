import { StyleSheet,View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import MaskGroup from '../assets/MaskGroup.png';
import ProfilePic from '../assets/EllipsePic.png';
import { StackNavigationProp } from '@react-navigation/stack';
import Logout from '../assets/Logout.png';
import profile from '../assets/Profile.png';
import Discount from '../assets/Discount.png';
import Document from '../assets/Document.png';
import Question from '../assets/questionCircle.png';
import Setting from '../assets/Setting.png';
import Hphone from '../assets/headphone.png';
type HomeScreenProps = {
  navigation: StackNavigationProp<any, 'HomeScreen'>;
};



const Home: React.FC<HomeScreenProps> = ({navigation}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <>
    <View style={styles.Main}>
          <Image style={styles.image} source={MaskGroup}/>
          <View style={styles.TextGroup}>
            <Text style={styles.glad}>Profile</Text>

            <View style={styles.overProfile}>
                <View style={styles.topProfile}>
                <Image style={styles.ProfilePicture} source={ProfilePic} />
                <View style={styles.insideProfile}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.name}>Diane</Text>
                </View>

                
                    <TouchableOpacity style={styles.LogoutBtn}>
                        <Image source={Logout} />
                    </TouchableOpacity>

            </View>
            </View>

          </View>

        <View style={styles.container}>

        <View>

        <View style={styles.drop}>
        <TouchableOpacity onPress={toggleDropdown}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 190 }}>
            <View style={styles.twoComp}>
          <Image source={profile} />
          <Text style={{fontSize: 18}}>Profile</Text>
            </View>

          <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={25} color="black" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
        </View>
      )}
        </View>

        <View style={styles.drop}>
        <TouchableOpacity onPress={toggleDropdown}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 190 }}>
            <View style={styles.twoComp}>
            <Image source={Discount} />
            <Text style={{fontSize: 18}}>Go Pro</Text>
            </View>

          <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={25} color="black" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
        </View>
      )}
        </View>

        <View style={styles.drop}>
        <TouchableOpacity onPress={toggleDropdown}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 85 }}>
            <View style={styles.twoComp}>
          <Image source={Document} />
          <Text style={{fontSize: 18}}>Terms & Conditions</Text>
            </View>

          <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={25} color="black" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
        </View>
      )}
        </View>

        <View style={styles.drop}>
        <TouchableOpacity onPress={toggleDropdown}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 208 }}>
            <View style={styles.twoComp}>
          <Image source={Question} />
          <Text style={{fontSize: 18}}>FAQ</Text>
            </View>

          <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={25} color="black" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
        </View>
      )}
        </View>

        <View style={styles.drop}>
        <TouchableOpacity onPress={toggleDropdown}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 175 }}>
            <View style={styles.twoComp}>
          <Image source={Setting} />
          <Text style={{fontSize: 18}}>Settings</Text>
            </View>

          <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={25} color="black" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
          <Text>Name</Text>
        </View>
      )}
        </View>

        </View>
        

      <View style={styles.lastBlock}>
        <TouchableOpacity style={styles.helpBtn}>
            <Text style={styles.help}><Image source={Hphone}/>How can we help you</Text>
        </TouchableOpacity>
        <Text style={{ color:'#848892'}}>Parking v.1</Text>
      </View>


          </View>


    </View>
    </>
  )
}

export default Home;

const styles = StyleSheet.create({
    lastBlock:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },
    helpBtn:{
        width: 311,
        height: 60,
        backgroundColor: '#081024',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    help:{
        fontSize: 18,
        color: '#FFFFFF',
        gap: 10
    },
    drop: {
        marginTop: '7%'
    },
    twoComp:{
        flexDirection: 'row',
        gap: 20
    },
    LogoutBtn:{
        backgroundColor: '#2A344E',
        width: 44,
        height: 44,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '35%',
        marginTop: 10
    },
    overProfile: {
        flexDirection: 'row',
    },
    name:{
        fontSize: 20,
        color: '#FFFFFF'
    },
    welcome: {
        fontSize: 14,
        color: '#848892'
    },
    ProfilePicture: {
        width: 68,
        height: 68,
    },
    insideProfile:{
        gap: 7,
        justifyContent: 'center',
    },
    topProfile: {
        flexDirection: 'row',
        gap: 20,
        marginLeft: '10%',
    },

  body: {
    padding: 0,
    margin: 0,
  },
  Main:{
    backgroundColor: '#130F26',
    height: '100%',
    gap: 20
  },
  TextGroup : {
    marginTop: '-90%',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 70
  },

  body1:{
    height: '18%',
    paddingHorizontal: 30,
  },
  image: {
    height: 426.91,
    width: 466.09,
  },
  glad:{
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#F4F4FA',
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 10,
    height: '100%',
    gap: 80
  },
})