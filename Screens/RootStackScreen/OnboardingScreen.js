

import React from 'react';
import {SafeAreaView,View,Text,TouchableOpacity,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen=()=>{
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
 export default OnboardingScreen;






/*This code Does Not work */

/*
import React from 'react';
import {View, Text,Button, StyleSheet}from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen= ({navigation})=>{
    return(
        <Onboarding
        
        pages={[
          {
            backgroundColor: '#a6e4d0',
          //  image: <Image source={require('./images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',           //onboarding screen code 
          },
          {
            backgroundColor: '#fdeb93',
          //  image: <Image source={require('./images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#e9bcbe',
          //  image: <Image source={require('./images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

         
          

        ]}
      />

    );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});
*/