console.disableYellowBox = true; 
import React from 'react';
import {ImageBackground,StyleSheet} from 'react-native';

import {Button,Text,Icon,} from 'react-native-elements'

import * as Font from 'expo-font';

export default async function connect({navigation}) {


  await loadAsync({
    // Load a font `Montserrat` from a static resource
    PermanentMarker: require('../assets/fonts/PermanentMarker-Regular.ttf'),
  
    // Any string can be used as the fontFamily name. Here we use an object to provide more control
    'PermanentMarker': {
      uri: require('../assets/fonts/PermanentMarker-Regular.ttf'),
      fontDisplay: FontDisplay.FALLBACK,
    },
  });
  
  // Use the font with the fontFamily property
  
  /* return<Text style={{ fontFamily: 'PermanentMarker' }} /> */


  return (
    <ImageBackground source={require('../assets/image_connection.jpg')} style={styles.container}>
      <Text style={styles.title} >Playdio</Text>
      <Text style={styles.text}>Connect with your favorite platform to enjoy your friends your entire library</Text>
      <Button

      icon={<Icon
      iconRight
      name="spotify"
      size={30}
      color="#1DB954"
      type='font-awesome'
      iconStyle={{marginRight:30}}
      />}
      color="#000"
      buttonStyle={styles.button}
      color="fff"
      title="Sign up with Spotify"
      titleStyle={
        {color:"black",
      fontSize:20}
      }
      
      /><Button
      buttonStyle={styles.button}
      title="Sign up with Deezer"
      type="solid"
      titleStyle={
        {color:"black",
      fontSize:20}
      }
      />
      <Text style={styles.connectEmail}>Or do it later</Text>
      <Button
      buttonStyle={styles.button}
      title="Sign up with email"
      type="solid"
      titleStyle={
        {color:"black",
        fontSize:20}

      }
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    marginTop: 120,
    marginBottom:100,
    marginLeft:100,
    color:"#fff",
    fontSize:70
  },
  text:{
    color:"#fff",
    marginLeft:30,
    marginRight:30,
    fontSize:20,
    marginBottom:35
  },
  connectEmail:{
    color:"#fff",
    marginRight:30,
    fontSize:20,
    marginBottom:10,
    marginLeft:30,
  },
  button:{
    backgroundColor: "#fff",
    marginBottom:30,
    marginRight:30,
    marginLeft:30,
    borderRadius:5,
  } 
  
});
