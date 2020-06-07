import React,{useState,useEffect} from 'react';
import { StyleSheet,  View,SafeAreaView, ScrollView ,FlatList} from 'react-native';

import { ListItem,Button,ButtonGroup,Text } from 'react-native-elements'
import SearchComponent, { Separator } from './components/SearchResult';
import police from './components/font';

import { TextField } from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {connect} from 'react-redux';

function CreateRadioEmpty(props) {



 /*  ------------------------------- Recuperation playlist   ------------------------------- */   
    const [listSong,setListSong] =useState();
    // requete BDD
    useEffect(()=>{
        let idSpotify ="33"
        async function recupDonnée(){
          var requestBDD = await fetch('http://192.168.1.8:3000/playlist-item',{
            method:"POST",
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body:`idSpotify=idSpotify`
          })
          var reponse = await requestBDD.json()
        
            setListSong(reponse)
        }
        recupDonnée()
      },[])
      
/*  add list music to array  */

      let listOfMusic =[] ;
      const[arrayMusic, setArrayMusic] =useState();
     
      useEffect(()=>{
          if(listSong){ // attente de la reception du JSON
            let infoListSong = listSong.response.items
           
            /* recuperation des info json */
            let mapArrayMusic = infoListSong.map((item,i)=>{
                
                let nameTitle = item.track.name
                let artist = item.track.artists[0].name
                let idSpotify =item.track.id
                let type = item.track.type
                let img =item.track.album.images[0].url
                let isrc = item.track.external_ids.isrc
                listOfMusic.push({id:i,name:nameTitle,text:artist,url:img,spotifyId:idSpotify,type:type})
                setArrayMusic(listOfMusic)
            })
     
          }else {
              console.log("----------------> ko")
          }
       },[listSong])


 /*  ------------------------------- Recuperation Recherche   ------------------------------- */   
//  Resquest
 const [searchJSON,setSearchJson] =useState();

 useEffect(()=>{
 
     let searchText = "6IQZC7SBVCNa4raN2O4tKt"
 
     async function recupDonnée(){
       var requestBDD = await fetch('http://192.168.1.8:3000/user-search',{
         method:"POST",
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
         body:`search_term=${searchText}`
       })
       var reponse = await requestBDD.json()
        setSearchJson(reponse)
      
     }
     recupDonnée()
   },[])

//  Mise en forme du resultat
let listOfResult =[] ;
const[arrayResult, setArrayResult] =useState();

useEffect(()=>{
    if(searchJSON){ // attente de la reception du JSON
      let infoResultArray = searchJSON.response.tracks.items
     
      /* recuperation des info json */
      let mapArrayResult = infoResultArray.map((item,i)=>{
                let nameTitle = item.name
                let artist = item.artists[0].name
                let idSpotify =item.id
                let type = 'track'
                let img =item.album.images[0].url
                let isrc = item.external_ids.isrc

       listOfResult.push({id:i,name:nameTitle,text:artist,url:img,spotifyId:idSpotify,type:type,isrc:isrc})
       setArrayResult(listOfResult)
      })

    }else {
        console.log("----------------> ko")
    }
 },[searchJSON])


/*  ajout du filtre  */

const[search,setSearch]=useState("")
const [listToSearch,SetListToSearch] =useState();


let filteredSong=[] ;
    if(listToSearch){
        filteredSong= listToSearch.filter(function(item) {
            //applying filter for the inserted text in search bar
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = search.toUpperCase();
            return itemData.indexOf(textData) > -1;
            });
    
       }else{
           console.log("<=====waiting ")
       }
      

/*  waiting for array playlist initialisation */


 /* Affichage dynamique en fonction de l'ecran*/

 const buttons = ['My Playlist', 'Search on Spotify']
 const [indexButton,setIndex]=useState(0)

 useEffect(() => {
  console.log("change",indexButton);
    if(indexButton===0){
      console.log("bouton 1")
      SetListToSearch(arrayMusic)
    }else{
       console.log("bouton2")
       SetListToSearch(arrayResult)
    }
  });



  return (
<View style={styles.container}>
    
                        <View style={styles.input}> 
                            <Text> New Radio</Text>
                            
                            <TextField
                                label={'Find a song'}
                                highlightColor="#c2185b"
                                onChangeText={ (value) => setSearch(value) }
                                />
                            </View>
                    

                            <View>
                                    <ButtonGroup
                                    onPress={(e) => {alert('Simple Button pressed',e),setIndex(e) }}
                                        selectedIndex={indexButton}
                                        buttons={buttons}
                                        containerStyle={{height: 40}}
                                        selectedButtonStyle ={{
                                            backgroundColor:"#00838F",
                                        }}
                                        />

                            </View>


    {/* liste des musiques */}
        <FlatList
            data={filteredSong}
            keyExtractor={item => item.id}
            renderItem={({ item}) => (
            <SearchComponent
                {...item}
                navigation={props.navigation}
                onPress={()=>{validPlaylist(props.spotifyId)}} 
            />
             


)}
ItemSeparatorComponent={() => <Separator />}

/>    

         
 
                <View style={styles.button}>
                        <Button 
                            title="Press me"
                            onPress={() => alert('Simple Button pressed')}
                            buttonStyle={{
                                backgroundColor:"#00838F",
                            }}
                        />
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
function mapStateToProps(state){
    return {playlistRedux: state.PlaylistAdd, token:state.token}
  }
  
  export default connect(
    mapStateToProps, 
    null
  )(CreateRadioEmpty);

//export default CreateRadio2


