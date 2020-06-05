console.disableYellowBox = true; 
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';

import {Button,Input} from 'react-native-elements'

import {connect} from 'react-redux'



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function connectSignUp(props) {
  
//Matthieu  http://192.168.1.8
// IP Marion http://192.168.1.25
//IP Ben http://192.168.1.43

const [email,setEmail]=useState('')
const [firstName,setFirstName]=useState('')
const [lastName,setLastName]=useState('')
const [password,setPassword]=useState('')
useEffect(()=>{
  async function recupDonnée(){
    var requestBDD = await fetch('http://192.168.1.25:3000/infoSignUp',{
      method:"POST",
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:`email=${props.emailStore}`
    })
    var reponse = await requestBDD.json()
    setEmail(reponse.infoUser[0].email)
  }
  recupDonnée()
},[])

async function signUp(email,firstName,lastName,password){
  var userCreate = await fetch('http://192.168.1.25:3000/sign-up',{
  method:"POST",
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
  body:`email=${email}&firstName=${firstName}&lastName=${lastName}&password=${password}`
})
var resultServer =await userCreate.json()
var storageUser = {
                    "email":resultServer.result[0].email,
                    "idSpotify":resultServer.result[0].musicAccounts[0].platfornUserID,
                    "namePlatform":resultServer.result[0].musicAccounts[0].namePlatform
                  }
AsyncStorage.setItem("user",JSON.stringify(storageUser))

                /* recuperer les données du localstaorage */
                /* AsyncStorage.getItem('user',function(error,data){
                  var userData = JSON.parse(data)
                }) */
props.navigation.navigate("Home")
}

return (
    <View style={{flex: 1}}>
            <Input
      placeholder=''
      type='email'
      />
      <Input
      placeholder='email'
      value={email}
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

function mapStateToProps(state) {
  return { emailStore : state.email }
}

export default connect(
  mapStateToProps,
  null
)(connectSignUp)