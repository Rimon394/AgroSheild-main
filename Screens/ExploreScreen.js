import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ExploreScreen = () => {
  return (
    <View style={styles.container }>
      <Text>ExploreScreen</Text>
    </View>
  )
}

export default ExploreScreen;

const styles=StyleSheet.create({

  container:{

     flex: 1,
     alignItems: 'center', 
     justifyContent: 'center' ,
     backgroundColor:'#FFE603'
  }
})