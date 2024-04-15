import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditProfile = () => {
  return (
    <View style={styles.bigBlock}>
      <Text>EditProfile</Text>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
bigBlock:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
})