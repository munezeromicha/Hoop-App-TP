import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ParkingScreenOne = () => {
  return (
    <View style={styles.mainPark}>
      <View style={styles.blockOne}>
        <View style={styles.insideBlock}></View>
        <Text style={styles.textBlock}>Details</Text>
      </View>
    </View>
  )
}

export default ParkingScreenOne

const styles = StyleSheet.create({
    textBlock:{
        fontSize: 20,
        color: '#2D2D2D'
    },
    insideBlock: {
        width: 50,
        height: 50,
        backgroundColor: '#EAEAF3', 
    },
mainPark:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
blockOne:{
    flexDirection: 'row',
},
})