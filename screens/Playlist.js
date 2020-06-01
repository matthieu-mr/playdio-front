console.disableYellowBox = true; 
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native';

import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

import Constants from 'expo-constants';

export default function App() {
/* const [listUser,setListUser]=useEffect() ;  */


let listTest = [
  {name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  {name:"John",url:"https://randomuser.me/api/portraits/men/40.jpg"},
  {name:"albert",url:"https://randomuser.me/api/portraits/men/39.jpg"},
  {name:"Moimeme",url:"https://randomuser.me/api/portraits/men/38.jpg"},
  {name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  {name:"John",url:"https://randomuser.me/api/portraits/men/40.jpg"},
  {name:"albert",url:"https://randomuser.me/api/portraits/men/39.jpg"},
  {name:"Moimeme",url:"https://randomuser.me/api/portraits/men/38.jpg"},
  {name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  {name:"John",url:"https://randomuser.me/api/portraits/men/40.jpg"},
  {name:"albert",url:"https://randomuser.me/api/portraits/men/39.jpg"},
  {name:"Moimeme",url:"https://randomuser.me/api/portraits/men/38.jpg"},
]

  useEffect(() => {
 
    // console.log(listTest);
    }, []);


{/*  <Avatar rounded source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg',}} size="large" /> */}
{/*  
   <View style={styles.avatar}>
     {avatarList}
    </View>
*/}




let avatarList = listTest.map ((item,i)=>{
  console.log("recup des items",item.url) ; 
  
  return <Avatar key={i} rounded source={{uri: item.url}}size="medium" /> 
})

  return (


    <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView} horizontal={true}>
            <View style={styles.avatar}>
              {avatarList}
            </View>
          </ScrollView>
          <ScrollView style={styles.scrollView} >
            <View style={styles.avatar}>
              {avatarList}
            </View>
          </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    marginTop:15
  },
  text: {
    fontSize: 42,
  },
  avatar: {
    flex: 1,
    flexDirection:"row",
  },
  
});