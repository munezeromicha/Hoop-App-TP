import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import MaskGroup from "../assets/MaskGroup.png";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";

type LoginScreenProps = {
  navigation: StackNavigationProp<any, "LoginScreen">;
};

const LoginEmail: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSubmit = () => {
    if (email && password) {
      Alert.alert("logged in Successfully!");
    } else {
      Alert.alert("Failed", "Please fill in all fields");
    }
  };
  return (
    <>
      <View style={styles.Main}>
        <Image style={styles.image} source={MaskGroup} />
        <Text style={styles.glad}>Glad to see you!!</Text>
        <View style={styles.container}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.email}
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              placeholderTextColor="rgba(45, 45, 45, 0.5)"
            />
          </View>
          <View style={styles.inputs}>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.email1}
                placeholder="Password"
                secureTextEntry={secureTextEntry}
                placeholderTextColor="rgba(45, 45, 45, 0.5)"
                value={password}
                onChangeText={handlePasswordChange}
              />
              <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                <Ionicons
                  name={secureTextEntry ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="gray"
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <Text style={styles.bottomText1}>
            Forgot password?
            <Text
              style={styles.lastText1}
              onPress={() => navigation.navigate("Forget")}
            >
              {" "}
              Retrieve
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.bottomText}>
            Don't have an account?
            <Text
              style={styles.lastText}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              {" "}
              Signup
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default LoginEmail;

const styles = StyleSheet.create({
  body: {
    padding: 0,
    margin: 0,
  },
  Main: {
    backgroundColor: "#130F26",
  },
  image: {
    height: 200,
    width: "100%",
  },
  glad: {
    fontSize: 30,
    position: "absolute",
    padding: 70,
    color: "#fff",
  },
  container: {
    height: 650,
    backgroundColor: "#F4F4FA",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  inputs: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email1: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 6,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  inputs1: {
    backgroundColor: "#fff",
    margin: 30,
    marginTop: 30,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email: {
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    borderWidth: 2,
    backgroundColor: "#130F26",
    padding: 20,
    borderRadius: 20,
    margin: 20,
    marginTop: 170,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  bottomText: {
    flex: 5,
    textAlign: "center",
    color: "rgba(45, 45, 45, 0.5)",
  },
  lastText: {
    fontSize: 14,
    color: "#F43939",
  },
  bottomText1: {
    flex: 5,
    textAlign: "right",
    color: "rgba(45, 45, 45, 0.5)",
  },
  lastText1: {
    fontSize: 14,
    color: "#F43939",
  },
});
