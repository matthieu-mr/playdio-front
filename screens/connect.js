console.disableYellowBox = true; 
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button,Input} from 'react-native-elements';
import * as AuthSession from 'expo-auth-session';

import getAuthorizationCode from '../screens/getAuthorizationCode';
import { WebView } from 'react-native-webview';

export default function connect({navigation}) {



  return (
    <View style={{flex: 1}}>
      
      <Button
      title="Sign up with email"
      type="solid"
      onPress={()=>navigation.navigate("SignUp")}
      />
            <Button
      title="continuer vers la Home"
      type="solid"
      onPress={()=>{navigation.navigate("Home"); console.log("button"); getAuthorizationCode()}}
      />
    </View>
  );
}

