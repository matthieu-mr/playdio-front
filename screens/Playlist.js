import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,FlatList} from 'react-native';
import { Avatar, Badge, Icon, withBadge,Card,List,ListItem } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Swype';
import Track from './components/Track';


//  To toggle LTR/RTL uncomment the next line
// I18nManager.allowRTL(true);

import AppleStyleSwipeableRow from './components/AppleStyleSwipeableRow';
import GmailStyleSwipeableRow from './components/GmailStyleSwipeableRow';

export default function Playlist(props) {
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

const quotes = [
  { id: '0', text: 'It’s just a flesh wound.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg" },
  { id: '1', text: 'That is my least vulnerable spot.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg" },
  {id: '2',text: 'This building has to be at least…. three times bigger than this!',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '3', text: 'I am serious. And don’t call me Shirley.' ,name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '4', text: 'Yeah, but I shoot with this hand.' ,name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '5', text: 'I’m just one stomach flu away from my goal weight.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg" },
  {id: '6',text:'I’m about to do to you what Limp Bizkit did to music in the late ’90s.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  {id: '7',text:'Martini. Gin, not vodka. Obviously. Stirred for 10 seconds while glancing at an unopened bottle of vermouth.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '8',text:'Greater good?’ I am your wife! I’m the greatest good you’re ever gonna get!',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '9', text:'I feel comfortable using legal jargon in everyday life. [Someone catcalls her.] I object!',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"
  },
  {id: '10',text:'We get the warhead and we hold the world ransom for…. One million dollars.',
},
];


  /* ====> boucle avatar */
  let avatarList = listTest.map ((item,i)=>{
    return <Avatar key={i} rounded source={{uri: item.url}}size="medium" /> 
  })

  
  /*  gestion des mouvements */

  const [idDel, setIdDel]= useState() ; 
  const [ idAdd, setIdAdd] = useState() ;
  


  /* futures fonction de gestion */
  useEffect(() => {
    console.log("change",idDel);
    }, [idAdd]);

  return (

    <SafeAreaView style={styles.container}>
      <Text> Playlist</Text>
      {/* badge en haut de l'ecran */}
          <ScrollView style={styles.scrollView} horizontal={true}>
            <View style={styles.avatar}>
              {avatarList}
            </View>
          </ScrollView>

    {/* liste des musiques */}
            <FlatList
                data={quotes}
                keyExtractor={item => item.id}
                renderItem={({ item}) => (
                  <ListItemSwap
                    {...item}
                    onSwipeFromLeft={() => {alert('swiped from left!');setIdAdd(item.id)}}
                    onSwipeFromRight={() => {alert('pressed right!');setIdDel(item.id)}}
                    
                  />
                )}
                ItemSeparatorComponent={() => <Separator />}
              />

    {/*{musicList} */}
    <Track
 />
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

