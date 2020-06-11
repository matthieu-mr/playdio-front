import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,Switch,AsyncStorage} from 'react-native';
import { ListItem,Button, Header, Avatar} from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Song';
import {connect} from 'react-redux';
// import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font'

import police from '../screens/components/font';

import  {TextField,  FilledTextField, OutlinedTextField,}  from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function AddRadioGetSpotify(props) {

const [radioName, setRadioName] = useState("test")
const [isPrivate, setIsPrivate] = useState(false) ; 
const [isPlayingOnly, setIsPlayingOnly] = useState(false) ; 
const [send, setSender] = useState(false);

let listMusic =[]

let [infoUserStorage,setInfoUserStorage]=useState([]);




useEffect( () =>{
let  fetchSpotifyPlaylist = async () => {

    var infoUser = await AsyncStorage.getItem("user");
    var infoRecup = JSON.parse(infoUser)
    
    setInfoUserStorage(infoRecup)
    console.log("affichage storage local",infoUser)
}

fetchSpotifyPlaylist() ;
},[])



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
                    <Text style={styles.categoryTitle}> Create Your New Radio</Text>
                    
                    <TextField 
                        label={'Playlist Name'}
                        tintColor="#26a69a"
                        onChangeText={ (value) => setRadioName(value) }
                       
                        />
               
                    </View>
               
            

                    <View style={styles.paramPlaylist}> 
                    <ListItem
                        title="private"
                        titleStyle={
                            {
                            fontFamily:'Roboto'}
                               }
                        subtitle="ajout en private"
                        //leftAvatar={{ source: { uri: item.avatar_url } }}
                        rightIcon={
                            <Switch
                            value={isPrivate}
                            onValueChange={() => {
                                setIsPrivate(!isPrivate);
                            }}
                        />
                        }
                        />
                        
                        <ListItem 
                        title="private"
                        titleStyle={
                            {
                            fontFamily:'Roboto'}
                               }
                        subtitle="ajout en private"
                        //leftAvatar={{ source: { uri: item.avatar_url } }}
                        rightIcon={
                            <Switch
                                value={isPlayingOnly}
                                onValueChange={() => {
                                    setIsPlayingOnly(!isPlayingOnly);
                                }}
                            />}
                        />

                    </View>


         
 
  
                        </ScrollView>
                        <View style={styles.button}>
                        <Button 
                            title="Add From Spotify Playlist"
                            titleStyle={
                            {
                            fontFamily:'Roboto'}
                               }
                            onPress={()=>validPlaylist("spotify")}
                            buttonStyle={{
                                backgroundColor:"#00838F",
                                marginBottom: wp ('5%')
                            }}
                        />
                                
             
        
        
                        <Button 
                            title="Add Empty Radio"
                            titleStyle={
                            {
                            fontFamily:'Roboto'}
                               }
                            onPress={()=>validPlaylist("empty")}
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
  )(AddRadioGetSpotify);


// export default CreateRadio1


