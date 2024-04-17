// import React, {useState, useEffect} from "react";
// import {View, Text, StyleSheet} from 'react-native';
// import { MaterialIcons } from "@expo/vector-icons";
// import BluetoothSerial from 'react-native-bluetooth-serial-next';

// const ParkingDistance: React.FC = () =>{
//     const [distance, setDistance] = useState<number | null>(null);

//     useEffect(() => {
//         const startBluetooth = async () => {
//             try {
//                 await BluetoothSerial.requestEnable();
//                 BluetoothSerial.on('read', (data: any) => {
//                     const ParsedData = parseInt(data);
//                     if (!isNaN(ParsedData)) {
//                         setDistance(ParsedData);
//                     }
//                 });
//                 await BluetoothSerial.device(sensorAddress).connect();
//                 BluetoothSerial.device(sensorAddress).write('start');
//             } catch (error) {
//                 console.error('Bluetooth error:', error);
//             }
//           };
      
//           startBluetooth();
      
//         //   return () => {
//         //     BluetoothSerial.disconnect(sensorAddress);
//         //   };
//         }, []);
//     return (
//         <View style={styles.container}>
//           <MaterialIcons name="location-on" size={24} color="black" style={styles.icon} />
//           <Text style={styles.distanceText}>{distance !== null ? `${distance}m` : 'Loading...'}</Text>
//         </View>
//       );
//     };
  
//     const styles = StyleSheet.create({
//         container: {
//           flexDirection: 'row',
//           alignItems: 'center',
//         },
//         icon: {
//           marginRight: 5,
//         },
//         distanceText: {
//           fontSize: 20,
//           fontWeight: 'bold',
//         },
//       });

// export default ParkingDistance;