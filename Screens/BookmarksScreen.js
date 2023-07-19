import {  Text,View,SafeAreaView ,StyleSheet,FlatList,Image} from 'react-native'
import React from 'react'
import data from '../Assets/data';

const BookmarksScreen = () => {
  const renderItem =({item,index})=>{
    return(
      <View style={styles.listContainer}>
        <View style ={styles.imageContainer}>
          <Image  source={item.image} style={styles.image}/>
      </View>
      </View>
    );
  };



  return (
    <SafeAreaView style={styles.container}>

      <FlatList  data={data}renderItem={renderItem}keyExtractor={item => item.id}/>

    </SafeAreaView>
  );
};

export default BookmarksScreen;

const styles=StyleSheet.create({

  container:{
     flex:1,
      
      backgroundColor:'#FF8B02',


  },

listContainer:{
  flex:1,
  backgroundColor:'White',
  margin:10,
  borderRadius:20,

},



    imageContainer:{




  

   margin:15,
   borderRadius:10,
   overflow:'hidden'

    },




  image:{

     width:'100%',
      height:undefined,
      aspectRatio:1,

  }
});