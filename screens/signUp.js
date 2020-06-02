console.disableYellowBox = true; 
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Button,Input} from 'react-native-elements'

import {connect} from 'react-redux'

import { withNavigationFocus } from 'react-navigation';

function connectSignUp() {

  const [email,setEmail]=useState()
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [password,setPassword]=useState()
  async function signUp(email,firstName,lastName,password){
    console.log(email,firstName,lastName,password)
  var userCreate = await fetch('https://playdio-backend.herokuapp.com/sign-up',{
  method:"POST",
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
  body:`email=${email}&firstName=${firstName}&lastName=${lastName}&password=${password}`
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
      onChangeText={(value)=>setFirstName(value)}
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



export default connect(
  null,
  null
)(withNavigationFocus(connectSignUp))