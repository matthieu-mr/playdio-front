import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,Switch} from 'react-native';
import { ListItem,Button } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Swype';
import {connect} from 'react-redux';


import police from '../screens/components/font';

import  {TextField,  FilledTextField, OutlinedTextField,}  from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function CreateRadio1(props) {

const [radioName, setRadioName] = useState()
const [isPrivate, setIsPrivate] = useState(false) ; 
const [isPlayingOnly, setIsPlayingOnly] = useState(false) ; 
const [send, setSender] = useState(false);


console.log(radioName)

let validPlaylist = ()=>{  
        if (radioName){
            props.addplaylist({name:radioName,isPrivate:isPrivate,isPlayingOnly,isPlayingOnly})
            props.navigation.navigate('AddRadio2')
        }else{
            alert("The title of your playlist can't be empty")
        }
}

  return (
<View style={styles.container}>


    <View style={styles.form}>

        <SafeAreaView >
            <ScrollView >

                {/*  "#c2185b" */}
        
                  
                    <View style={styles.input}> 
                    <Text> Create Your New Radio</Text>
                    
                    <TextField
                        label={'Playlist Name'}
                        tintColor="#26a69a"
                        onChangeText={ (value) => setRadioName(value) }
                       
                        />
               
                    </View>
               
            

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
                            onPress={()=>validPlaylist()}
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
  )(CreateRadio1);


// export default CreateRadio1


