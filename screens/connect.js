console.disableYellowBox = true; 
import React,{useState,useEffect} from 'react';
import {ImageBackground,StyleSheet,View} from 'react-native';

import {Button,Text,Icon,} from 'react-native-elements'

import * as Font from 'expo-font';

/* import police from '../screens/components/font' */

export default  function connect({navigation}) {

const [font,setFont]= useState(false)

/* useEffect( ()=>{
  async function police (){
    await Font.loadAsync({
    PermanentMarker: require("../assets/fonts/PermanentMarker-Regular.ttf"),                         
    Roboto: require("../assets/fonts/Roboto-Regular.ttf"),                         
    });
    
    }
  police()
  setFont(true);
},[])
 */
  /* if(font ==true){ */
    return (
    <ImageBackground source={require('../assets/image_connection.jpg')} style={styles.container}>
      <Text style={styles.title} >Playdio</Text>
      <Text style={styles.text}>Connect with your favorite platform to enjoy your friends your entire library</Text>
      <Button
      iconRight
      icon={<Icon
      name="spotify"
      size={40}
      color="#1DB954"
      type='font-awesome'
      iconStyle={{marginleft:1000}}
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
/*   }else{
    return(
      <View></View>
    )
  } */
  
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
    fontSize:70,
    /* fontFamily:"PermanentMarker" */
  },
  text:{
    color:"#fff",
    marginLeft:30,
    marginRight:30,
    fontSize:20,
    marginBottom:35,
    /* fontFamily:"Roboto" */

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
    height:50
  } 
  
});
