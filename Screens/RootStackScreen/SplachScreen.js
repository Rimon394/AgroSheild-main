/*
import React from 'react';
import {SafeAreaView,View,Text,TouchableOpacity,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplachScreen=()=>{
  return (
      < SafeAreaView  style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#FF8B02'}}>

        <View>
        <Image
         style={{
         width: 115,
            height:86,
            resizeMode: 'contain',
  }}
  source={require('../../Assets/fruit.png')} 
/>
        </View>
      <View>


          <Text style={{fontSize:30,fontWeight:'bold',color:'#FFFFFF',transform:[{rotate:'-15deg'}]}}>Catch the Virus from the harvest! </Text>

      </View>
      <TouchableOpacity  style={{backgroundColor:'#FFE603',padding:20,width:'90%',borderRadius:5,flexDirection:'row',justifyContent:'space-between'}}>

             <Text style={{fontWeight:'bold',fontSize:18,color:'#BE2C2C'}}>Swipe to get Started</Text>
             <MaterialIcons name="arrow-forward-ios"size={22} color='black'/>
        
       </TouchableOpacity>


       </SafeAreaView>
       

  );
};
 export default SplachScreen;







/*  My Splash Screen Code */
/*
import React from 'react';


import { View, Text ,StyleSheet, SafeAreaView,Image} from 'react-native';

import * as Animatable from 'react-native-animatable';

import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';

const SplachScreen = () => {
  return (
    <View style={style.Bg_Color}>
      <Text>Hello</Text>
      <View style={StyleSheet.image}>
      <Image source={require('../../Assets/farmer.png')} />
      </View>
    

      <SafeAreaView style={{flex:1}}>
        <View
        
         >
          <Progress.Bar progress={0.3} width={200} />
        </View>
        
        </SafeAreaView>
    </View>
    

  )
}


const style = StyleSheet.create({
  Bg_Color:{
    flex: 1,
    backgroundColor:'#F9B300'
},
image:{
   flex: 1,
   alignItems:'center',
}

}
)


export default SplachScreen;
*/

///////////////////////////////////////////////////////////////////////////////////////
/*  
  

### This Code is yours ##



import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from'react-native-vector-icons/AntDesign';


import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createMaterialBottomTabNavigator();aA

const TopNavigatorScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{backgroundColor: 'rgba(255, 93, 2, 1)'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color}) => (
            <AntDesign name="mobile1" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <AntDesign  name="database" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopNavigatorScreen;



*/