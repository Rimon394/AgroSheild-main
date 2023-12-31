


import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import { AuthContext } from '../../Components/AuthProvider';

const SignUpScreen = ({navigation}) => {

  const {SignUp} = useContext(AuthContext);

  const handleSignUp=(userData)=>{
    console.log("Info: ",userData.name, userData.email, userData.passward);
    SignUp(userData.email, userData.passward)
  }

  const [data, setData] = useState({
    name:'',
    email: '',
    passward: '',
    check_textInputChange: false,
    check_textNameChange: false,
    secureTextEntry: true,
  });

  const textNameChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        name: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_textInputChange: false,
      });
    }
  };

  const textEmailChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textNameChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textNameChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      passward: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to AgroSheild!</Text>
        <Text style={styles.text_header}>Sign Up</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">

        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#05375a"
            size={20}
          />

          <TextInput
            placeholder="Your Name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textNameChange(val)}
          />

          {data.check_textNameChange ? (
            <Animatable.View animation="bounceIn">
              <MaterialCommunityIcons
                name="check-circle-outline"
                color="green"
                size={20}
              />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#05375a"
            size={20}
          />

          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textEmailChange(val)}
          />

          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <MaterialCommunityIcons
                name="check-circle-outline"
                color="green"
                size={20}
              />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer]}>Password</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                color="grey"
                size={20}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-outline"
                color="grey"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer]}>Confirm Password</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                color="grey"
                size={20}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-outline"
                color="grey"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={()=>handleSignUp(data)}>
          <LinearGradient
            colors={['#08d4cd', '#01ab9d']}
            style={{
              width: '100%',
              height: 50,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: 25,
                marginTop: 7,
              }}>
              Sign Up
            </Text>
          </LinearGradient>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 10, gap: 5}}>
            <Text style={{fontSize: 15}}>Already Have an Account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={{color: 'green', fontSize: 15}}>
                Please Login!
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>

          <Animatable.View animation="lightSpeedIn" style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="google" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="facebook" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="linkedin" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="github" color="black" size={35} />
            </TouchableOpacity>

          </Animatable.View>
        </View>
      
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    marginTop: -15,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'yellow',
  },
  signnIn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
