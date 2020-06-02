console.disableYellowBox = true; 
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Badge, Icon, withBadge,Card,ListItem } from 'react-native-elements'


import Constants from 'expo-constants';

export default function App(props) {
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


let avatarList = listTest.map ((item,i)=>{

  return <Avatar key={i} rounded source={{uri: item.url}}size="medium" /> 
})

let musicList = listTest.map ((item,i)=>{
  console.log("recup des items",item.name) ; 
 
 return (

      <ListItem
        key={i}
        leftAvatar={{ source: { uri: item.url } }}
        title={item.name}
        subtitle={item.name}
        bottomDivider
        chevron
       onPress={() => {
          alert("mon");
        }} 


        />

  );
})

  return (


    <SafeAreaView style={styles.container}>
      <Text> Mussssiiiiiiccc</Text>
      {/* badge en haut de l'ecran */}
          <ScrollView style={styles.scrollView} horizontal={true}>
            <View style={styles.avatar}>
              {avatarList}
            </View>
          </ScrollView>


    {/* liste des musiques */}
          <ScrollView >
                {musicList}
          </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
  },
  scrollView: {
    marginBottom:15,
    marginHorizontal: 20,
  },

  scrollViewscrollViewMusic: {
    marginHorizontal: 20,
    width:100,
    flex: 1, marginLeft: 0, marginRight: 0
  },

  avatar: {
    flex: 1,
    flexDirection:"row",
    padding:10,
    marginLeft:10,
    marginRight:10,
  },
  card: {
    flex: 1,
    flexDirection:"row",
    padding:10,
    marginLeft:10,
    marginRight:10,
  },
  
});