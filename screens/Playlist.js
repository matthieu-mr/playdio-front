import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,FlatList, AsyncStorage, TouchableHighlight } from 'react-native';
import { Avatar, Badge, Icon, withBadge,Card,List,ListItem, Image, Header } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Song';
import Track from './components/Track';
import Profile from './components/Profile';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import * as Font from 'expo-font';
import { AppLoading } from 'expo-font';
import { useFonts} from '@use-expo/font'
import ip from '../variables';
import { ResponseError } from 'expo-auth-session/build/Errors';


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



// Get a radio playlist from DB

const [playlistRadio, setPlaylistRadio] = useState([]);



// Si vous voulez voir les playlists s'afficher, décommentez et customisez le code suivant avec vos infos 
// (idSpotify = users[i].platfornUserID, id = users[i]._id)
// Cela permettra d'ajouter l'ID utilisateur dans le local Storage
// **************************************************************************************

// var personalData = {"email":"marion.toutant@gmail.com","idSpotify":"20jsoqg4lepva2a9osvyqwg1a","namePlatform":"spotify","id":"5eda54934b437a052471a86c"}
// AsyncStorage.setItem("user", JSON.stringify(personalData))

// **************************************************************************************


// A modifier avec l'Id de la radio sur laquelle on clique en page Home
var radioId = "5ee10a5ee1ff3642d8f36a63"

useEffect( () =>{
    fetchPlaylist = async () => {

      var infoUser = await AsyncStorage.getItem('user');
      var userData = JSON.parse(infoUser);
      
      var request = await fetch(`${ip}/radio-playlist`,{
        method:"POST",
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:`userId=${userData.id}&radioId=${radioId}`
      })
      var response = await request.json();
      
      var rawPlaylist = [];
      for(var i=0; i<response.tracks.length; i++) {
        rawPlaylist.push({
          id: response.tracks[i]._id, 
          name: response.tracks[i].name, 
          artist: response.tracks[i].artist, 
          album: response.tracks[i].album, 
          image: response.tracks[i].image,
          length: response.tracks[i].length,
          position: response.tracks[i].position,
          isrcID: response.tracks[i].isrcID,
          upcID: response.tracks[i].upcID,
          spotifyId: response.tracks[i].spotifyId,
          href: response.tracks[i].href,
          externalUrl: response.tracks[i].externalUrl,
          previewUrl: response.tracks[i].previewUrl,
          uri: response.tracks[i].uri,
        });
      }
      setPlaylistRadio(rawPlaylist);

    }
    fetchPlaylist()  
},[])


// Display of the playlist flatlist

let playlist = [];
playlistRadio.map((track,i)=>{
    playlist.push({id: i, name: track.name, text: track.artist, url: track.image, radioId: radioId});
})


  /* ====> boucle avatar */
  let avatarList = listTest.map ((item,i)=>{
    return <Avatar key={i} rounded source={{uri: item.url}}size="medium" /> 
  })

  
  /*  gestion des mouvements */

  const [idDel, setIdDel]= useState() ; 
  const [ idAdd, setIdAdd] = useState() ;
  


  /* futures fonction de gestion */
  
    let [fontsLoaded] = useFonts({
    PermanentMarker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  });
 
  let fontSize = 24;
  let paddingVertical = 6;
  
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
  
      <View
      style={{
        flexDirection: "row",
        marginTop: "1%",

      }}
    >
    <Text style={styles.categoryTitle}>
      Playlist</Text>
    <Icon style={{
        marginRight: '3%',
      }} type="entypo" color="#00838F" name="dots-three-horizontal" />
    <Icon type="entypo" color="#00838F" name="share" />
    </View>
      {/* badge en haut de l'ecran */}
          <ScrollView style={styles.scrollView} horizontal={true}>
          <TouchableHighlight
            onPress={() => { props.navigation.navigate('SelectUser') }}
            >
                <Image
                style={{ width: 50, height: 50 }}
                source={require('../assets/icons/add_blue.png')}
                />
            </TouchableHighlight>
            <View style={styles.avatar}>
              {avatarList}
            </View>
          </ScrollView>

    {/* liste des musiques */}
            <FlatList 
                data={playlist}
                keyExtractor={ (item, index) => index.toString() }
                renderItem={({ item}) => (
                  <ListItemSwap style={styles.flatList}
                    {...item} 
                    onSwipeFromLeft={() => {alert('swiped from left!');setIdAdd(item.id)}}
                    onSwipeFromRight={() => {alert('pressed right!');setIdDel(item.id)}}
                    navigation={props.navigation}
                    url="Play"
                  />
                )}
                ItemSeparatorComponent={() => <Separator />}
              />

    {/*{musicList} */}
    <Track
 />
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
 
  },
  scrollView: {
    marginBottom:hp('1%'),
    marginHorizontal: hp('2%'),
    marginVertical: hp('3%'),
  },

  flatList: {
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 0
  },
  scrollViewscrollViewMusic: {
    marginHorizontal: 0,
    width:hp('33%'),
    flex: hp('0,33%'), marginLeft: 0, marginRight: 0
  },
  avatar: {
    flex: hp('0,33%'),
    flexDirection:"row",
    padding:hp('3%'),
    marginRight:hp('3%'),
    marginVertical: 0,
    paddingVertical: 0,
    marginBottom:hp('6%'),
  },

  card: {
    flex: hp('0,33%'),
    flexDirection:"row",
    padding:hp('3%'),
    marginLeft:hp('3%'),
    marginRight:hp('3%'),
    
  },
  categoryTitle: {
    color:"#383838", 
    fontSize:hp('3%'), 
    marginLeft:wp('7%'),
    fontFamily: 'PermanentMarker',
    marginRight: '5%',
    
  },
  
});
