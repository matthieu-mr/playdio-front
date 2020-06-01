console.disableYellowBox = true; 
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button,Input} from 'react-native-elements'


export default function connect() {
  const [email,setEmail]=useState('')
  const [firtName,setFirtName]=useState('')
  const [lastName,setLastName]=useState('')
  const [password,setPassword]=useState('')






async function signUp(email,firstName,lastName,password){
  var userCreate = await fetch('http://192.168.1.43:3000/sign-up',{
  method:"POST",
  body:"email="+email+"&firstName"+firstName+"&lastName"+lastName+"&password"+password
})
var resultServer = userCreate.json()
console.log(resultServer)
}





  return (
    <View style={{flex: 1}}>
      <Input
      placeholder='email'
      type='email'
      onChangeText={(value)=>setEmail(value)}
      />
      <Input
      placeholder='firtName'
      onChangeText={(value)=>setFirtName(value)}
      />      
      <Input
      placeholder='lastName'
      onChangeText={(value)=>setLastName(value)}
      />      
      <Input
      placeholder='password'
      type='passord'
      onChangeText={(value)=>setPassword(value)}
      />
      <Button
      title="Sign up with email"
      type="solid"
      onPress={()=>signUp(email,firstName,lastName,password)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
