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
import React, { useState } from "react";
import MaskGroup from "../assets/MaskGroup.png";
import ProfilePic from "../assets/EllipsePic.png";
import { StackNavigationProp } from "@react-navigation/stack";
import Logout from "../assets/Logout.png";
import Profile from "../assets/Profile.png";
import Discount from "../assets/Discount.png";
import Document from "../assets/Document.png";
import Question from "../assets/questionCircle.png";
import Setting from "../assets/Setting.png";
import Hphone from "../assets/headphone.png";
import RightArrow from "../assets/RightArrow.png";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from '@react-navigation/native';

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

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [value, setValue] = useState<string | null>(null);

  const navigations = useNavigation();

  const handleOnPress = (item: { label: string; value: string }) => {
    // Navigate to the next page
    navigation.navigate('EditProfile', { item });
  };

  const handleOnPressTwo = (item: { label: string; value: string }) => {
    // Navigate to the next page
    navigation.navigate('Upgrade', { item });
  };

  return (
    <>
      <View style={styles.Main}>
        <Image style={styles.image} source={MaskGroup} />
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
                handleOnPress(item);
              }}
              renderLeftIcon={() => (
                <Image source={Profile} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={RightArrow} />}
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
                <Image source={Discount} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={RightArrow} />}
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
                <Image source={Document} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={RightArrow} />}
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
                <Image source={Question} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={RightArrow} />}
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
                <Image source={Setting} style={styles.icon} />
              )}
              renderRightIcon={() => <Image source={RightArrow} />}
            />
          </View>

          <View style={styles.lastBlock}>
            <TouchableOpacity style={styles.helpBtn}>
              <Text style={styles.help}>
                <Image source={Hphone} />
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
