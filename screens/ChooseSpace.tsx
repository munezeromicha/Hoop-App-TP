import { StyleSheet, Text, View,Image,TouchableOpacity, PanResponder, Animated,ScrollView } from 'react-native'
import React, {useState} from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

type SpaceScreenProps = {
    navigation: StackNavigationProp<any, 'SpaceScreen'>
}

const ChooseSpace: React.FC<SpaceScreenProps> = ({navigation}) => {

    const [pan] = useState(new Animated.ValueXY()); // Initialize pan position

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // Update pan.x when moving horizontally
          dy: pan.y, // Update pan.y when moving vertically
        },
      ],
      { useNativeDriver: false } // Disable native driver for animating layout properties
    ),
    onPanResponderRelease: () => {
      // Handle release event if needed
    },
  });

  

  return (
    <View style={styles.SpaceBlock}>
            <View style={styles.insideOne}>
            <TouchableOpacity style={styles.returnBtn} onPress={()=>navigation.navigate('Track')}>
                    <Image style={{width: 24, height: 24}} source={require('../assets/ArrowLeft.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>Choose Space</Text>
            </View>

            <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
            <View style={{flexDirection: 'row', gap: 10}}>
            <View style={{width: 85,height: 34,borderRadius: 17,backgroundColor: '#F43939',justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color:'#FFFFFF'}}>1st Floory</Text>
            </View>
            <View style={{width: 85,height: 34,borderRadius: 17,backgroundColor: '#EAEAF3',justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color:'#2D2D2D'}}>2nd Floory</Text>
            </View>
            <View style={{width: 85,height: 34,borderRadius: 17,backgroundColor: '#EAEAF3',justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color:'#2D2D2D'}}>3rd Floory</Text>
            </View>
            <View style={{width: 85,height: 34,borderRadius: 17,backgroundColor: '#EAEAF3',justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color:'#2D2D2D'}}>4th Floory</Text>
            </View>
            <View style={{width: 85,height: 34,borderRadius: 17,backgroundColor: '#EAEAF3',justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, color:'#2D2D2D'}}>5th Floory</Text>
            </View>
            </View>
      </ScrollView>
      
            <View>
                <Image source={require('../assets/ChooseSpace.png')} />

                <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <Image
          style={styles.ShadowCar}
          source={require('../assets/RedSpaceCar.png')}
        />
      </Animated.View>
            </View>


            
            <TouchableOpacity style={{width: 311, height: 60, backgroundColor: '#130F26',borderRadius: 15,justifyContent: 'center',alignItems: 'center'}} onPress={()=> navigation.navigate('Book')}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>Book Space</Text>
            </TouchableOpacity>
    </View>
  )
}

export default ChooseSpace

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    height: 100,
    
  },
  scrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ShadowCar: {
    position: 'absolute',
    // top: '50%'
  },
SpaceBlock:{
flex: 1,
gap: 20,
justifyContent: 'center',
alignItems: 'center',
},
insideOne: {
    flexDirection: 'row',
    gap: 60,
    marginLeft: '-30%'
},
title: {
  fontSize: 20,
},
returnBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    backgroundColor: '#EAEAF3',
    borderRadius: 10
},
})



// import React, { useState } from 'react';
// import { View, StyleSheet, PanResponder, Animated } from 'react-native';

// const DragDropComponent: React.FC = () => {
//   const [pan] = useState(new Animated.ValueXY()); // Initialize pan position

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event(
//       [
//         null,
//         {
//           dx: pan.x, // Update pan.x when moving horizontally
//           dy: pan.y, // Update pan.y when moving vertically
//         },
//       ],
//       { useNativeDriver: false } // Disable native driver for animating layout properties
//     ),
//     onPanResponderRelease: () => {
//       // Handle release event if needed
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         {...panResponder.panHandlers}
//         style={[styles.box, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//   },
// });

// export default DragDropComponent;
