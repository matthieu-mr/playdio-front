console.disableYellowBox = true; 
import React,{useState,useEffect} from 'react';
import {ImageBackground,StyleSheet,View} from 'react-native';

import {Button,Text,Icon,} from 'react-native-elements'

/* import * as Font from 'expo-font'; */

import police from '../screens/components/font'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default  function connect({navigation}) {
  var fontPermanentMarker =''
  var fontRoboto =''
  const [font,setFont]= useState(false)

useEffect( ()=>{
  police()
  setFont(true);
    if(font ==true){ 
    fontPermanentMarker = 'PermanentMarker'
    fontRoboto = 'Roboto'
  }
},[])



    return (
    <ImageBackground source={require('../assets/image_connection.jpg')} style={styles.container}>
      <Text style={styles.title} >Playdio</Text>
      <Text style={styles.text}>Connect with your favorite platform to enjoy your friends your entire library</Text>
      <Button 
      title="continuer vers la Home"
      type="solid"
      onPress={()=>navigation.navigate("Home")}
      />
      <Button
      iconRight
      icon={<Icon
      name="spotify"
      size={40}
      color="#1DB954"
      type='font-awesome'
      
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

    </ImageBackground>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    marginTop:hp('15%'),
    marginBottom:hp('15%'),
    marginLeft:wp('25%'),
    color:"#fff",
    fontSize:wp('15%'),
    /* fontFamily:fontPermanentMarker */
  },
  text:{
    color:"#fff",
    marginLeft:wp('7%'),
    marginRight:wp('7%'),
    fontSize:wp('4%'),
    marginBottom:hp('2%'),
    /* fontFamily:fontRoboto */

  },
  connectEmail:{
    color:"#fff",
    marginRight:wp('7%'),
    fontSize:wp('4%'),
    marginBottom:hp('2%'),
    marginLeft:wp('7%'),
  },
  button:{
    backgroundColor: "#fff",
    marginBottom:hp('5%'),
    marginRight:wp('7%'),
    marginLeft:wp('7%'),
    borderRadius:wp('2%'),
    height:hp('6.5%')
  } 
  
});