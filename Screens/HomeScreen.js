import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container } >
        <Text style={{fontSize: 30}}>Home Screen</Text>
        <Button title="Go to details screen"  onPress={()=> navigation.navigate("Details")}/>
      </View>
    )
  }

export default HomeScreen;

const styles=StyleSheet.create({

  container:{

     flex: 1,
     alignItems: 'center', 
     justifyContent: 'center' ,
     backgroundColor:'#FFE603'
  }



})