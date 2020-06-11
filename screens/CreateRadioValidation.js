import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,Switch,AsyncStorage, Share} from 'react-native';
import { ListItem,Button, Header, Avatar} from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Song';
import {connect} from 'react-redux';
// import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font'
import * as Linking from 'expo-linking';


import police from '../screens/components/font';

import  {TextField,  FilledTextField, OutlinedTextField,}  from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function CreateRadioValidation(props) {
let testLink = Linking.openURL('exp://w7-6rn.matthieumr.playdio-frontend.exp.direct:80');



CreationLien=()=>{

let monlien = Linking.makeUrl("AddRadioGetSpotify")
    console.log(monlien)
}




let share=async ()=>{
        try {
            const result = await Share.share({
              message: `J utilise playdio, test du share ^^  ${testLink}` 
            });
      
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
    }
    

// redirection en fonction du choix user
let validPlaylist = (target)=>{  
        if (radioName){
            props.addplaylist({name:radioName,isPrivate:isPrivate,isPlayingOnly,isPlayingOnly,listMusic,infoUser:infoUserStorage})

            if (target=="empty"){
              props.navigation.navigate('AddRadioEmpty')
            
            } else if (target == "spotify"){
              props.navigation.navigate('AddRadioGetSpotify')
            
            }
         //   props.navigation.navigate('AddRadio2')
        }else{
            alert("The title of your playlist can't be empty")
        }
}
 
  return (
<View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        rightComponent={<Avatar
              rounded 
              source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
              size="small"
            />}
        containerStyle={{
          backgroundColor: 'white', 
          height:hp('10%')
        }}
      />


    <View style={styles.form}>

 
            <ScrollView >

                {/*  "#c2185b" */}
        
                  
                    <View style={styles.input}> 
                    <Text style={styles.categoryTitle}> Your Radio is on Air</Text>
                    
                    </View>
               
            

                    <View style={styles.paramPlaylist}> 

                    <Text> Congrats  ! Your radio is on air</Text>
                    <Text> You can share it using the following links </Text>
                    <Button 
                            title="Share your playlist"
                            titleStyle={
                            {
                            fontFamily:'Roboto'}
                               }
                            onPress={()=>share("empty")}
                            buttonStyle={{
                                backgroundColor:"#00838F",
                            }}
                        />

                    </View>


         
 
  
                        </ScrollView>
                        <View style={styles.button}>
        
        
                        <Button 
                            title="Add Empty Radio"
                            titleStyle={
                            {
                            fontFamily:'Roboto'}
                               }
                            onPress={()=>CreationLien("empty")}
                            buttonStyle={{
                                backgroundColor:"#00838F",
                            }}
                        />
                        </View>
 </View>
 </View>
  );

}

const styles = StyleSheet.create({
    container: {
    display:"flex",
    flex:1,
    backgroundColor: '#fff',   
      },

    form:{
     display:"flex",
     flex:1,
   
     justifyContent:'flex-end',
      marginBottom:wp("15%"),
    },

  input:{
    marginRight:wp('10%'),
    marginLeft:wp('10%'),
    marginBottom:wp('10%'),
    },  


  paramPlaylist:{  
    backgroundColor: "#26a69a",
    marginRight:wp('7%'),
    marginLeft:wp('7%'),
    marginBottom:wp('70%'),
  },


  button:{
   marginRight:wp('10%'),
   marginLeft:wp('10%'),
   marginBottom: wp('10%')
},

categoryTitle: {
    color:"#383838", 
    fontSize:hp('3%'), 
    width:wp('75%'), 
    marginLeft:wp('7%'),
    fontFamily: 'PermanentMarker'
  },


  
});


function mapDispatchToProps(dispatch) {
    return {
      addplaylist: function(info) { 
        dispatch( {type: 'addName',info }) 
      }
    }
  }
  
  export default connect(
      null, 
      mapDispatchToProps
  )(CreateRadioValidation);


// export default CreateRadio1


