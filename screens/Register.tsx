import {StyleSheet,View,Text,Image,TouchableOpacity,TextInput,Button,Alert,TouchableWithoutFeedback} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
// import { Client, Account, ID, Models } from "react-native-appwrite/src";
import ToastManager, { Toast } from 'toastify-react-native'
import { supabase } from '../lib/supabase';


type RegisterScreenProps = {
  navigation: StackNavigationProp<any, "RegisterScreen">;
};

const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {

  const showToasts = () => {
    Toast.success('Created Successfully!')
  }


  const [authentication, setAuthentication] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  // const [loggedInUser, setLoggedInUser] = useState("");
  const [error, setError] = useState('');

  const handleAuthenticationChange = (text: string) => {
    setAuthentication(text);
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  const handleRegistration = async () => {
    try {
      // Validate input fields
      if (password !== authentication) {
        setError('Passwords do not match');
        return;
      }
  
      // Create a new user with email, password, and phone number
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        phone: phoneNumber,
      });
  
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
  
      console.log('User created:', data.user);
  
      showToasts();
  
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    } catch (error) {
      setError((error as Error).message);
    }
  };
  
  
  

  // const handleRegistration = async () => {
  //   try {
  //     if (password !== authentication) {
  //       setError('Passwords do not match');
  //       return;
  //     }
  
  //     const { data, error: signUpError } = await supabase.auth.signUp({
  //       email,
  //       password,
  //       phone: phoneNumber,
  //     });
  
  //     if (signUpError) {
  //       setError(signUpError.message);
  //       return;
  //     }
  
  //     const { error: updateError } = await supabase.auth.updateUser({
  //       phone: phoneNumber,
  //     });
  
  //     if (updateError) {
  //       setError(updateError.message);
  //       return;
  //     }
  
  //     console.log('User created:', data.user);
  //     showToasts();

  //     setTimeout(() =>{
  //       navigation.navigate('Login')
  //     }, 3000)
  //   } catch (error) {
  //     setError((error as Error).message);
  //   }
  // };












// const handleSubmit = async () => {
//   if (authentication && email && phoneNumber && password) {
//     try {
//       // await account.create(ID.unique(), email, password, phoneNumber);
//       // await login(email, password);
//       // setLoggedInUser(await account.get());

//       const {
//         data: { session },
//         error,
//       } = await supabase.auth.signUp({
//         email: email,
//         password: password,
//         phoneNumber: phoneNumber
//       })

//       showToasts();
//       setTimeout(()=> {
//         navigation.navigate("Login");
//       }, 3000);
      
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Failed", "An error occurred while registering.");
//     }
//   } else {
//     Alert.alert("Failed", "Please fill in all fields.");
//   }
// };

// async function login(email: string, password: string) {
//   await account.createEmailSession(email, password);
//   setLoggedInUser(await account.get());
// }

// function setLoggedInUser(user: Models.User<Models.Preferences>) {
//   setLoggedInUser(user);
// }

  return (
    <>
      <View style={styles.Main}>
      <ToastManager />
        <Image
          style={styles.image}
          source={require("../assets/MaskGroup.png")}
        />
        <Text style={styles.glad}>Let's start!!</Text>
        <View style={styles.container}>
          <View style={styles.body1}>
            <View style={styles.inputs1}>
              <TextInput
                style={styles.email}
                placeholder="Email"
                keyboardType="email-address"
                placeholderTextColor="rgba(45, 45, 45, 0.5)"
                value={email}
                onChangeText={handleEmailChange}
              />
            </View>
            <View style={styles.inputs1}>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.email1}
                  placeholder="Password"
                  placeholderTextColor="rgba(45, 45, 45, 0.5)"
                  secureTextEntry={secureTextEntry}
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
            <View style={styles.inputs1}>
              <TextInput
                style={styles.email}
                placeholder="Password Authentication"
                keyboardType="default"
                secureTextEntry
                placeholderTextColor="rgba(45, 45, 45, 0.5)"
                value={authentication}
                onChangeText={handleAuthenticationChange}
              />
            </View>
            <View style={styles.inputs1}>
              <TextInput
                style={styles.email}
                placeholder="Phone number"
                keyboardType="phone-pad"
                placeholderTextColor="rgba(45, 45, 45, 0.5)"
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
              />
            </View>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleRegistration}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomText}>
            Have an account
            <Text
              style={styles.lastText}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  body: {
    padding: 0,
    margin: 0,
  },
  body1: {
    // paddingTop: 20,
    height: "40%",
  },
  Main: {
    backgroundColor: "#130F26",
    height: "100%",
  },
  image: {
    height: "20%",
    width: "100%",
  },
  glad: {
    fontSize: 30,
    position: "absolute",
    padding: 70,
    color: "#fff",
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
    borderRadius: 5,
  },
  container: {
    height: "100%",
    backgroundColor: "#F4F4FA",
    borderTopLeftRadius: 38,
    borderTopEndRadius: 38,
  },
  inputs1: {
    backgroundColor: "#fff",
    margin: 30,
    marginTop: 30,
    marginBottom: 0,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  email: {
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  btn: {
    height: "32%",
    display: "flex",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#130F26",
    padding: 20,
    borderRadius: 20,
    marginBottom: '-10%',
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  bottomText: {
    flex: 5,
    alignSelf: "center",
    // paddingTop: 10,
    color: "#rgba(45, 45, 45, 0.5)",
    marginTop: '9%'
  },
  lastText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#F43939",
  },
});

