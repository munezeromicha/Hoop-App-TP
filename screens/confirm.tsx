import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Group2 from "../assets/Group2.png";
// import { Timestamp } from "mongodb";

const Confirm: React.FC<any> = ({ navigation }) => {
  return (
    <>
      <View style={styles.Main}>
        <View style={styles.container}>
          <Image source={Group2} />
        </View>
        <View style={styles.body1}>
          <Text style={styles.check}>Check Your Email</Text>
          <Text style={styles.text}>
            We have sent a password {"\n"}
            recover instructions to your {"\n"}
            email.
          </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Request")}
          >
            <Text style={styles.buttonText}>Open email app</Text>
          </TouchableOpacity>
          <Text style={styles.skip}>Skip I'll confirm later</Text>
        </View>
        <View style={styles.last}>
          <Text style={styles.bottomText}>
            Didn’t receive the email? Check your spam {"\n"}
            filter, or{" "}
            <Text
              style={styles.lastText}
              onPress={() => {
                navigation.navigate("Forget");
              }}
            >
              try another email address
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  body: {
    padding: 0,
    margin: 0,
  },
  Main: {
    backgroundColor: "#F4F4FA",
    height: "100%",
    padding: 30,
  },
  container: {
    height: "40%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  body1: {
    height: "18%",
  },
  check: {
    fontSize: 27,
    color: "rgba(45, 45, 45, 1)",
    alignSelf: "center",
    paddingTop: 30,
  },
  text: {
    paddingTop: 15,
    textAlign: "center",
    color: "rgba(45, 45, 45, 0.7)",
    lineHeight: 26,
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 1,
  },
  btn: {
    height: "20%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "#130F26",
    padding: 18,
    borderRadius: 20,
    margin: 20,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  skip: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 14,
    color: "rgba(45, 45, 45, 0.7)",
  },
  last: {
    height: "16%",
    display: "flex",
    justifyContent: "flex-end",
  },
  bottomText: {
    letterSpacing: 0.4,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(45, 45, 45, 0.7)",
  },
  lastText: {
    color: "rgba(244, 57, 57, 1)",
  },
});
