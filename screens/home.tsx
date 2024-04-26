import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator} from "react-native";
import React, { useMemo, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { database } from "../app-write/config";
import { Query } from "react-native-appwrite/src";

type HomeScreenProps = {
  navigation: StackNavigationProp<any, "HomeScreen">;
};

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [parking, setParking] = useState<
  |{id:string;
  Heading:string;
  address:string;
  price:string;
  image:string;
}[]
  | any []>([]);

  const loadParking = useMemo(async()=>{
    const { documents } = await database.listDocuments(
      "662abb159280f531844e",
      "662abb748bdb8fbe70e8",
      [Query.limit(5)]
    );
    documents.forEach((current) => {
      setParking((value) => {
        return [
          ...value,
          {
            id:current.$id,
            price:current.price,
            address:current.address,
            Heading:current.Heading,
            image:current.image
          }
        ]
      })
    });
  }, []);

  return (
    <>
      <View style={styles.Main}>
        <Image style={styles.image} source={require("../assets/MaskGroup.png")} />
        <View style={styles.TextGroup}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.glad}>Hola, Diane👋🏻</Text>
          </TouchableOpacity>
          <Text style={styles.find}>Find an easy parking spot</Text>
          <TouchableOpacity
            style={styles.NotifyButton}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Text>
              <Image source={require("../assets/Notification.png")} />
            </Text>
          </TouchableOpacity>

          <View style={styles.searchContainer}>
            <Image source={require("../assets/Search.png")} style={styles.icon} />
            <TextInput
              placeholder="Search"
              style={styles.holderInput}
              placeholderTextColor="#f4f4fa"
            />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.groupOne}>
            <Text style={styles.categories}>Categories</Text>
            <View style={styles.boxes}>
              <View style={styles.boxOne}>
                <Image source={require("../assets/Car.png")} />
                <Text>Car</Text>
              </View>
              <View style={styles.boxOne}>
                <Image source={require("../assets/Bike.png")} />
                <Text>Bike</Text>
              </View>
              <View style={styles.boxOne}>
                <Image source={require("../assets/Bus.png")} />
                <Text>Bus</Text>
              </View>
              <View style={styles.boxOne}>
                <Image source={require("../assets/Van.png")} />
                <Text>Van</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.groupTwo}>
              <Text style={styles.textPark}>Nearst Parking Spaces</Text>

               <View style={styles.boxTwo}>
                {parking.length === 0 ? (
                  <ActivityIndicator color="black" size="large" />
                ) : (
                  parking.map((parkings) =>{
                    console.log(parkings);
                    return(
                      <View style={styles.insideBox}
                      key={parkings.id}>
                        <Image 
                        source={{
                          uri: parkings.image
                        }} style={styles.card} />
    
                        <View style={styles.twoText}>
                          <View>
                            <Text style={styles.Mall}>
                              {parkings.Heading}
                            </Text>
                            <Text style={styles.Street}>
                              {parkings.address}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.sevenHours}>
                              <Text style={styles.insideHours}>
                                {parkings.price}
                              </Text>
                              <Text>/hour</Text>
                            </Text>
                          </View>
                        </View>
    
                        <View style={styles.minutes}>
                          <Text style={styles.sevenMinutes}>7 min</Text>
                        </View>
                      </View>
                    )
                  })
                )}
              </View>
              <View style={styles.boxTwo}>
                {parking.length === 0 ? (
                  <ActivityIndicator color="black" size="large" />
                ) : (
                  parking.map((parkings) =>{
                    console.log(parkings);
                    return(
                      <View style={styles.insideBox} 
                      key={parkings.id}>
                        <Image 
                        source={{
                          uri: parkings.image
                        }} style={styles.card}/>
    
                        <View style={styles.twoText}>
                          <View>
                            <Text style={styles.Mall}>
                              {parkings.Heading}
                            </Text>
                            <Text style={styles.Street}>
                              {parkings.address}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.sevenHours}>
                              <Text style={styles.insideHours}>
                                {parkings.price}
                              </Text>
                              <Text>/hour</Text>
                            </Text>
                          </View>
                        </View>
    
                        <View style={styles.minutes}>
                          <Text style={styles.sevenMinutes}>7 min</Text>
                        </View>
                      </View>
                    )
                  })
                )}
              </View>
{/*
              <View style={styles.boxTwo}>
                <TouchableOpacity onPress={() =>navigation.navigate('Track')}>
                  <View style={styles.insideBox}>
                    <Image source={Rectangle2} />

                    <View style={styles.twoText}>
                      <View>
                        <Text style={styles.Mall}>Graha Mall</Text>
                        <Text style={styles.Street}>123 Dhaka Street</Text>
                      </View>
                      <View>
                        <Text style={styles.sevenHours}>
                          <Text style={styles.insideHours}>$7</Text>
                          <Text>/hour</Text>
                        </Text>
                      </View>
                    </View>

                    <View style={styles.minutes}>
                      <Text style={styles.sevenMinutes}>7 min</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  sevenMinutes: {
    color: "#F43939",
    fontSize: 12,
  },
  minutes: {
    width: 59,
    height: 26,
    backgroundColor: "#FFF3F3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  insideHours: {
    color: "#F43939",
    fontSize: 26,
    fontWeight: "bold",
  },
  sevenHours: {
    color: "#F43939",
  },
  twoText: {
    flexDirection: "column",
    gap: 30,
  },
  Mall: {
    fontSize: 18,
    color: "#2D2D2D",
  },
  Street: {
    fontSize: 14,
    color: "#868a94",
  },
  insideBox: {
    flexDirection: "row",
    gap: 10,
  },
  textPark: {
    fontSize: 20,
    color: "#0A1124",
  },
  boxTwo: {
    width: 311,
    height: 126,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: "4%",
  },
  card:{
    width: '30%',
    height: '20%',
  },
  groupTwo: {
    gap: 20,
  },
  groupOne: {
    gap: 20,
  },
  boxes: {
    flexDirection: "row",
    gap: 10,
  },
  boxOne: {
    backgroundColor: "#FFFFFF",
    height: 67,
    width: 73,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  categories: {
    fontSize: 20,
    color: "#0A1124",
  },
  body: {
    padding: 0,
    margin: 0,
  },
  Main: {
    backgroundColor: "#130F26",
    height: "100%",
  },
  TextGroup: {
    marginTop: "-90%",
    marginLeft: "10%",
    marginBottom: 20,
    gap: 7,
  },
  find: {
    fontSize: 16,
    color: "#868a94",
  },
  NotifyButton: {
    width: 50,
    height: 50,
    backgroundColor: "#2A344E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    marginLeft: 275,
    marginTop: "-20%",
    paddingBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A344E",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 30,
    padding: 7,
    marginLeft: "-1%",
  },
  icon: {
    marginLeft: 10,
  },
  holderInput: {
    flex: 1,
    height: 40,
    // color: '#333',
    marginLeft: "6%",
    fontSize: 16,
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
    fontSize: 30,
    color: "#fff",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#F4F4FA",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    paddingTop: 30,
    height: "100%",
    gap: 50,
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

  btn: {
    height: "50%",
    display: "flex",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#130F26",
    padding: 20,
    borderRadius: 20,
    margin: 20,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  bottomText: {
    flex: 5,
    fontWeight: "500",
    textAlign: "center",
    color: "rgba(45, 45, 45, 0.5)",
  },
  lastText: {
    fontSize: 14,
    color: "#F43939",
  },
  bottomText1: {
    textAlign: "right",
    fontWeight: "500",
    paddingRight: 10,
    color: "rgba(45, 45, 45, 0.5)",
  },
  lastText1: {
    fontSize: 14,
    color: "#F43939",
  },
});
