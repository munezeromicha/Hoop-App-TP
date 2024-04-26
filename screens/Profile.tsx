import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useState, useContext, createContext  } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
// import { Client, Account, ID } from "react-native-appwrite/src";
import { supabase } from  '../lib/supabase';
import ToastManager, { Toast } from 'toastify-react-native'


// let client = new Client();
// client
//   .setEndpoint('https://cloud.appwrite.io/v1')
//   .setProject('662658e8596ec1427342')

// let account = new Account(client);

type HomeScreenProps = {
  navigation: StackNavigationProp<any, "HomeScreen">;
};

const data = [
  { label: "Edit Profile", value: "1" },

];
const Pro = [
  { label: "Upgrade Pro", value: "1" },

];
const Terms = [
  { label: "Terms & Conditions", value: "1" },

];
const Questions = [
  { label: "FAQ", value: "1" },

];
const Settings = [
  { label: "Change Password", value: "1" },

];
// const UserContext = createContext();
// export function useUser(){
//   return useContext(UserContext);
// }


const Home: React.FC<HomeScreenProps> = ({ navigation }) => {

  const showToasts = () => {
    Toast.success(' You Logged out')
  }
  
  const [value, setValue] = useState<string | null>(null);
  const [user, setUser] = useState(null);

  // async function logout(){
  //   await account.deleteSession("current");
  //   setUser(null);
  //   navigation.navigate('Login');
  // }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    showToasts();

    setTimeout(() =>{
      navigation.navigate('Login');
    },3000)
    
  }
  

  const navigations = useNavigation();

  const handleOnPressOne = (item: { label: string; value: string }) => {
    // Navigate to the next page
    navigation.navigate('Edit', { item });
  };

  const handleOnPressTwo = (item: { label: string; value: string }) => {
    // Navigate to the next page
    navigation.navigate('Upgrade', { item });
  };

  return (
    <>
    <ToastManager />
      <View style={styles.Main}>
        <Image style={styles.image} source={require("../assets/MaskGroup.png")} />
        <View style={styles.TextGroup}>
          <Text style={styles.glad}>Profile</Text>

          <View style={styles.overProfile}>
            <View style={styles.topProfile}>
              <Image style={styles.ProfilePicture} source={require("../assets/EllipsePic.png")} />
              <View style={styles.insideProfile}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.name}>Diane</Text>
              </View>

              <TouchableOpacity style={styles.LogoutBtn} onPress={signOut}>
                <Image source={require("../assets/Logout.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={{ marginTop: "6%" }}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Profile"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
                handleOnPressOne(item);
              }}
              renderLeftIcon={() => (
                <Image source={require("../assets/Profile.png")} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={require("../assets/RightArrow.png")} />}
            />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Pro}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Go Pro"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
                handleOnPressTwo(item);
              }}
              renderLeftIcon={() => (
                <Image source={require("../assets/Discount.png")} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={require("../assets/RightArrow.png")} />}
            />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Terms}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Terms & Conditions"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
              renderLeftIcon={() => (
                <Image source={require("../assets/Document.png")} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={require("../assets/RightArrow.png")} />}
            />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Questions}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="FAQ"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
              renderLeftIcon={() => (
                <Image source={require("../assets/questionCircle.png")} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={require("../assets/RightArrow.png")} />}
            />

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Settings}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Settings"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
              renderLeftIcon={() => (
                <Image source={require("../assets/Setting.png")} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={require("../assets/RightArrow.png")} />}
            />
          </View>

          <View style={styles.lastBlock}>
            <TouchableOpacity style={styles.helpBtn}>
              <Text style={styles.help}>
                <Image source={require("../assets/headphone.png")} />
                How can we help you
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "#848892" }}>Parking v.1</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 20,
    borderBottomColor: "gray",
    width: 300,
  },
  icon: {
    marginRight: 20,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  lastBlock: {
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  helpBtn: {
    width: 311,
    height: 60,
    backgroundColor: "#081024",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  help: {
    fontSize: 18,
    color: "#FFFFFF",
    gap: 10,
  },
  drop: {
    marginTop: "7%",
  },
  twoComp: {
    flexDirection: "row",
    gap: 20,
  },
  LogoutBtn: {
    backgroundColor: "#2A344E",
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "35%",
    marginTop: 10,
  },
  overProfile: {
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  welcome: {
    fontSize: 14,
    color: "#848892",
  },
  ProfilePicture: {
    width: 68,
    height: 68,
  },
  insideProfile: {
    gap: 7,
    justifyContent: "center",
  },
  topProfile: {
    flexDirection: "row",
    gap: 20,
    marginLeft: "10%",
  },

  body: {
    padding: 0,
    margin: 0,
  },
  Main: {
    backgroundColor: "#130F26",
    height: "100%",
    gap: 20,
  },
  TextGroup: {
    marginTop: "-90%",
    justifyContent: "center",
    marginBottom: 20,
    gap: 70,
  },

  body1: {
    height: "18%",
    paddingHorizontal: 30,
  },
  image: {
    height: 426.91,
    width: 466.09,
  },
  glad: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#F4F4FA",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 10,
    height: "100%",
    gap: 60,
  },
});
