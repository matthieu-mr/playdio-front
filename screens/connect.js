console.disableYellowBox = true; 
import React,{useState} from 'react';
import {ImageBackground} from 'react-native';

import {Button,Input,Text} from 'react-native-elements'


export default function connect({navigation}) {














  return (
    <ImageBackground style={{flex: 1}}>
      <Text  h1>Playdio</Text>
      <Button
      title="Spotify"
      type="solid"
      /><Button
      title="deezer"
      type="solid"
      
      />
      <Button
      title="Sign up with email"
      type="solid"
      onPress={()=>navigation.navigate("SignUp")}
      />
            <Button
      title="continuer vers la Home"
      type="solid"
      onPress={()=>navigation.navigate("Home")}
      />
    </ImageBackground>
  );
}

