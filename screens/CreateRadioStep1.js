import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,FlatList} from 'react-native';
import { Input } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Swype';

import police from '../screens/components/font'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function CreateRadio1(props) {

const [radioName, setRadioName] = useState()

console.log(radioName);




  return (

    <SafeAreaView>
          <ScrollView >
          <Text> Create Your New Radio</Text>
        <View style={styles.form}>
        <Input
            //placeholder='INPUT WITH ERROR MESSAGE'
            errorStyle={{ color: 'red' }}
            style={styles.input}
            errorMessage='ENTER A VALID ERROR HERE'
            onChangeText={value => setRadioName(value)}
           
              />
        
        
        </View>

        <View> 



        </View>

          </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#512da8',   
  },
  form:{
      marginTop:wp('40%'),
      marginRight:wp('10%'),
      marginLeft:wp('10%'),
  },
    button:{
    backgroundColor: "#fff",
    marginBottom:hp('5%'),
    marginRight:wp('7%'),
    marginLeft:wp('7%'),
    borderRadius:wp('2%'),
    height:hp('6.5%')
  },
  input:{
      backgroundColor:"#512da8"
  }

  
});

export default CreateRadio1


