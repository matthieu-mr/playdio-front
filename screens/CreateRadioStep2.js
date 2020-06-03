import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,Switch} from 'react-native';
import { ListItem,Button } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Swype';

import police from '../screens/components/font';

import { TextField } from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function CreateRadio2(props) {

const [radioName, setRadioName] = useState()
const [isPrivate, setIsPrivate] = useState(false) ; 
const [isPlayingOnly, setIsPlayingOnly] = useState(false) ; 
const [send, setSender] = useState(false);


console.log(radioName)

  return (
<View style={styles.container}>


    <View style={styles.form}>

        <SafeAreaView >
            <ScrollView >

                {/*  "#c2185b" */}
        
                    <ScrollView>
                    <View style={styles.input}> 
                    <Text> Create Your New Radio</Text>
                    
                    <TextField
                        label={'Playlist Name'}
                        highlightColor="#c2185b"
 
                        onChangeText={ (value) => setRadioName(value) }
                       
                        />
               
                    </View>
                    </ScrollView>

            

                    <View style={styles.paramPlaylist}> 
                    <ListItem
                        title="private"
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


         
 
                        <View style={styles.button}>
                        <Button 
                            title="Press me"
                            onPress={() => alert('Simple Button pressed')}
                            buttonStyle={{
                                backgroundColor:"#00838F",
                            }}
                        />
                        </View>
  
             
            </ScrollView>
        </SafeAreaView>

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
},


  
});

export default CreateRadio2


