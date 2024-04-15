import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { StackNavigationProp } from "@react-navigation/stack";
import ArrowLeft from "../assets/ArrowLeft.png";

type SliderScreenProps = {
  navigation: StackNavigationProp<any, "SliderScreen">;
};

const swipe = [
  {
    id: 1,
    title: "Get all the facilities by upgrading your account",
    description: "Get all the facilities by upgrading your account",
  },
  {
    id: 2,
    title: "Get all the facilities by upgrading your account",
    description: "Get all the facilities by upgrading your account",
  },
  {
    id: 3,
    title: "Get all the facilities by upgrading your account",
    description: "Get all the facilities by upgrading your account",
  },
];

const Upgrade: React.FC<SliderScreenProps> = ({ navigation }) => {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View
        style={{
          marginTop: -460,
          marginLeft: 325,
        }}
      >
        <Text
          style={{
            color: "#2D2D2D",
            fontSize: 16,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <View style={styles.container}>
          <View style={styles.insideOne}>
            <TouchableOpacity
              style={styles.returnBtn}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image style={{ width: 24, height: 24 }} source={ArrowLeft} />
            </TouchableOpacity>
            <Text style={styles.title}>Upgrade</Text>
          </View>

        <AppIntroSlider
          data={swipe}
          renderItem={({ item }) => {
            return (
              <View style={styles.swipePart}>
                <Text style={styles.titleOne}>{item.title}</Text>
                <View style={styles.boxOne}>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
            );
          }}
          activeDotStyle={{
            backgroundColor: "#F43939",
            display: "none",
          }}
          dotStyle={{
            display: "none",
            backgroundColor: "#c4c4cb",
          }}
          showSkipButton={false}
          showNextButton={false}
          showDoneButton={false}
          renderSkipButton={() => buttonLabel("Skip")}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  insideOne: {
    flexDirection: "row",
    gap: 80,
    marginLeft: '-27%'
  },
  returnBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 44,
    height: 44,
    backgroundColor: "#EAEAF3",
    borderRadius: 10,
  },
  boxOne: {
    width: 257,
    height: 372,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    gap: 70,
    marginTop: "25%",
  },
  swipePart: {
    // marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    borderWidth: 0.5,
  },
  titleOne: {
    fontSize: 24,
    color: "#2D2D2D",
    textAlign: "center",
    width: 229,
    borderWidth: 0.5,
  },
  description: {
    // marginTop: 10,
    fontSize: 16,
    color: "#2D2D2D",
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Upgrade;
